import { Component, Renderer2 } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: any;
  xtype: any;
  ytype: any;
  count!: number;
  num: any;
  element: any;
  span_id: any;
  constructor(private elementRef: ElementRef,
    private renderer: Renderer2) { }
  ngOnInit() {    
  }
  

  winningCondition = [['1','2','3'],['4','5','6'] ,['7','8','9'],['1','4','7'],['2','5','8'], ['3','6','9'],['1','5','9'],['3','5','7']]
  array = [['1','2','3'],['4','5','6'] ,['7','8','9'],['1','4','7'],['2','5','8'], ['3','6','9'],['1','5','9'],['3','5','7']]
  countData = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  isClicked = Array(this.countData.length).fill(false);

  countNumber: any = []
  terms:any
  XData: any = []
  YData: any = []

  showValue(){
    this.num.target.classList.add('pointer-events-none')

  }
  setValue(oldValue:any,terms:any) {
    let array = this.array.map(innerArray => {
      const index = innerArray.findIndex(value => value === oldValue);
      if (index !== -1) {
        innerArray[index] = this.terms;
       
      }
      
      return innerArray;
    });
    for (let i = 0; i < this.array.length; i++) {
      this.element = this.array[i];
      console.log(this.element);
      
       this.count = this.array[i].filter((type: any) =>type==terms).length
       console.log(this.count);
       if (this.count==3) {
        console.log('winner');
        
      }

    }
   
    
  }
  
termCheck(el: any,item:any) {
  this.num=el 
  this.countNumber.push(el)
      this.terms = this.terms === 'X' ? 'O' : 'X';
      if (this.terms=='X') {
        this.terms= el.target.value='X'
     this.setValue(el,this.terms)
     this.showValue()
     el.target.classList.remove('text-[#39FF14]')
     el.target.classList.remove('text-transparent')
      }
    
if (this.terms=='O') {
  this.terms= el.target.value='O'

  this.setValue(el,this.terms)
  this.showValue()
  el.target.classList.add('text-[#39FF14]')
  el.target.classList.remove('text-transparent')
}     
    if (this.countNumber.length == 9 || this.XData.length == 3 || this.YData.length == 3) {
      this.setEmpty()
      el.target.classList.remove('pointer-events-none')

    }

  }

  winnerTest() {
    
  }
  setEmpty() {
    this.array=this.winningCondition
    this.terms=''
    }
}




