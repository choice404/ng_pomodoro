import * as mongodb from 'mongodb';
import { Task } from './task';

export const collections:
{
  tasks?: mongodb.Collection<Task>;
} = {};

export async function connectToDatabase(uri: string) {
  const client = new mongodb.MongoClient(uri);
  await client.connect();

  const db = client.db('pomodoro');
  await applySchemaValidation(db);

  const tasksCollection = db.collection<Task>('tasks');
  collections.tasks = tasksCollection;
}

async function applySchemaValidation(db: mongodb.Db)
{
  const jsonSchema =
  {
    $jsonSchema:
    {
      bsonType: "object",
      required: ["name", "description", "isComplete", "pomodoroEstimate"],
      additionalProperties: false,
      properties:
      {
        _id: {},
        name:
        {
          bsonType: "string",
          description: "must be a string and is required"
        },
        description:
        {
          bsonType: "string",
          description: "must be a string and is required"
        },
        isComplete:
        {
          bsonType: "bool",
          description: "must be a bool and is required"
        },
        pomodoroCount:
        {
          bsonType: "int",
          description: "must be an int and is required"
        },
        pomodoroEstimate:
        {
          bsonType: "int",
          description: "must be an int and is required"
        },
      },
    },
  };

  await db.command
  ({
    collMod: "tasks",
    validator: jsonSchema
  }).catch(async (error: mongodb.MongoServerError) =>
  {
    if(error.codeName === 'NamespaceNotFound')
    {
      await db.createCollection('tasks', { validator: jsonSchema });
    }
  });
}
