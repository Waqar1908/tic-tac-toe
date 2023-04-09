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
   
    

    console.log(array);
    this.isClicked[oldValue]=true
    
  }
  
termCheck(el: any,item:any) {
  console.log(el);
  console.log(item);
  
  this.num=el

  
 

  
  console.log(el);
  
  
  this.countNumber.push(el)
      this.terms = this.terms === 'X' ? 'O' : 'X';
      console.log(this.terms);
      if (this.terms=='X') {
     this.setValue(el,this.terms)
     this.showValue()
     el.target.classList.remove('text-[#39FF14]')

    

      }
    
if (this.terms=='O') {
  this.setValue(el,this.terms)
  this.showValue()
  el.target.classList.add('text-[#39FF14]')



}     
    if (this.countNumber.length == 9 || this.XData.length == 3 || this.YData.length == 3) {
      this.winnerTest()
    }

  }

  winnerTest() {
  

    

    this.xtype = this.winningCondition.includes(this.XData.join(''))
    this.ytype = this.winningCondition.includes(this.YData.join(''))
    if (this.xtype) {
      console.log('x is winner');
      this.setEmpty()
    }
    if (this.ytype) {
      console.log('y is winner');
      this.setEmpty()
     }
    if (!this.xtype && !this.ytype && this.countNumber.length == 9) {
      console.log('draw');
      this.setEmpty()
    }
  }
  setEmpty() {
    this.countNumber = []
    this.XData = []
    this.YData = []
    this.terms=''
    }
}




