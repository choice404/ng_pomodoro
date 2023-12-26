import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent {
    @Input() text: string = "";
    @Input() isTitle: boolean = false;
    @Input() isSubtitle: boolean = false;
    @Input() isText: boolean = false;
    @Input() dir: string = 'left';
    @Input() isEffect: boolean = false;
    @Input() font: string = "";
    @Input() titleSize: number = 2;
    @Input() subtitleSize: number = 1.17;
    @Input() textSize: number = 1;

    titleFont: string = 'Bebas Neue'
    subtitleFont: string = 'Bebas Neue'
    textFont: string = 'IBM Plex Serif'

    letters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    lines: string[] = [];


    ngOnInit()
    {
        // this.isEffect = true;
        this.splitLines()
        /*
        if(this.isEffect)
        {

            for(let i = 0; i < this.lines.length; i++)
            {
                this.lines[i] = this.lines[i].toUpperCase();
                this.textEffect(-1, 1, i);
            }
        }
        console.log(this.text);
        this.lines = backup;
        */

       if(this.font !== "")
       {
           if(this.isTitle)
           {
               this.titleFont = this.font;
           }
           if(this.isSubtitle)
           {
               this.subtitleFont = this.font;
           }
           if(this.isText)
           {
               this.textFont = this.font;
           }
       }
    }


    private splitLines()
    {
        this.lines = this.text.split('\n');
        return this.lines
    }

    /*
    textEffect(iterations: number, increment: number, index: number)
    {
        const dirty: string = this.lines[index];
        const toClean: boolean = this.cleanText(this.lines[index], index);
        const initText : string = this.lines[index];

        const interval = setInterval(() =>
        {
            this.lines[index]= this.lines[index].split("")
            .map((letter, index) =>
            {
                if(letter === " ")
                {
                    return " ";
                }
                if(index < iterations)
                {
                    return initText[index];
                }
                return this.letters[Math.floor(Math.random() * 26)]
            })
            .join("");
            if(iterations >= initText.length)
            {
                clearInterval(interval);
            }
            iterations += 1 / increment;
        }, .1)
        let ret: any =  { bool: toClean, str: dirty};
        return ret;
    }

    cleanText(text: string, index: number)
    {
        let val: string[] = text.split('<');
        if(val.length === 1)
        {
            return false;
        }
        for(let i = 1; i < val.length; i++)
        {
            for(let j = 0; j < val[i].length; j++)
            {
                if(val[i][j] === '>')
                {
                    val[i] = val[i].substring(++j, val[i].length);
                    break;
                }
            }
        }
        this.lines[index] = val.join('');
        console.log(this.lines[index]);
        return true;
    }
    */
}
