import {Component} from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `

        <h1>Hello there!!</h1>
        <h3>{{base}}</h3>

        {{title}}

        <span>{{numero}}</span>

        <button (click)="opetation(+1)">+1</button>
        <button (click)="opetation(-1)">-1</button>

        <br>

        <span>{{base}}</span>

        <button (click)="opetation2('a')">+{{base}}</button>
        <button (click)="opetation2('b')">-{{base}}</button>

    `
})

export class ContadorComponent{

    title:string = 'Contador app';
    numero:number = 10;
    base:number = 5;
  
    add(){
      this.numero +=1;
    }
  
    rest(){
      this.numero -=1;
    }
  
    opetation(valor:any){
      
      this.numero += valor; 
  
    }
  
  
    opetation2(valor:any){
      
     if(valor == 'a'){
       this.base +=5;
     }
  
     if(valor == 'b'){
      this.base -=5;
    }
  
    }


}