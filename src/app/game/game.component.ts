import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  text = '';
    count: any;
    num: any;
    element: any;
    showOverlay: any;
  winner!:string;
    constructor() { }
    ngOnInit() {    
    }
    winningCondition = [['1','2','3'],['4','5','6'] ,['7','8','9'],['1','4','7'],['2','5','8'], ['3','6','9'],['1','5','9'],['3','5','7']]
    array = [['1','2','3'],['4','5','6'] ,['7','8','9'],['1','4','7'],['2','5','8'], ['3','6','9'],['1','5','9'],['3','5','7']]
    countData = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    countNumber: any = []
    termvalue=['1', '2', '3', '4', '5', '6', '7', '8', '9']
    terms:any
    showValue(){
      this.num.target.classList.add('pointer-events-none')
    }
    setValue(oldValue:any,terms:any) {
      let array = this.array.map(innerArray => {
        const index = innerArray.findIndex(value => value === oldValue);
        if (index !== -1) {
          innerArray[index] = terms;
         }
        return innerArray;
      });
      for (let i = 0; i < this.array.length; i++) {
        this.element = this.array[i];
        this.count = this.array[i].every((type: any) =>type==terms)
        if (this.count==true) {
          this.winner=`${terms} is winnner`
         this.setEmpty();
         this.openTab()
        } } }
        
  termCheck(el: any,item:any) {
    var index = this.termvalue.indexOf(item);
    this.num=el 
    this.countNumber.push(el)
    this.terms = this.terms == 'X' ? 'O' : 'X';
        if (this.terms=='X') {
          this.termvalue[index] = 'X'
       this.setValue(item,this.terms)
       this.showValue()
       el.target.classList.remove('text-[#39FF14]')
       el.target.classList.remove('text-transparent')
        }
      
  if (this.terms=='O') {
    this.termvalue[index] = 'O'
    this.setValue(item,this.terms)
    this.showValue()
    el.target.classList.add('text-[#39FF14]')
    el.target.classList.remove('text-transparent')
  }     
  if (this.countNumber.length == 9) {
    this.winner=`Its a Draw`
        this.setEmpty()
        this.openTab()
       }
    }
    setEmpty() {
      console.log(this.termvalue);
      this.array=this.winningCondition
      this.terms=''
      this.num.target.classList.remove('pointer-events-none')
      }
      closeTab(){
        this.showOverlay = false
        window.location.reload()
        document.body.style.overflow = "auto"
      }
      openTab(){
        this.showOverlay = true
        document.body.style.overflow = "hidden"
        let i = 0;
        const intervalId = setInterval(() => {
          this.text += this.winner.charAt(i);
          i++;
          if (i === this.winner.length) {
            clearInterval(intervalId);
          }
        }, 100);    
  }
}
