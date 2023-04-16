import { Component } from '@angular/core';
import { window } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title: any;
  xtype: any;
  ytype: any;
  count: any;
  num: any;
  element: any;
  terms1: any;
  clicked!: boolean;
  a='X';
  b='O'
  terms2:any;
  showOverlay: any;
  constructor() { }
  ngOnInit() {    
  }
  winningCondition = [['1','2','3'],['4','5','6'] ,['7','8','9'],['1','4','7'],['2','5','8'], ['3','6','9'],['1','5','9'],['3','5','7']]
  array = [['1','2','3'],['4','5','6'] ,['7','8','9'],['1','4','7'],['2','5','8'], ['3','6','9'],['1','5','9'],['3','5','7']]
  countData = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  countNumber: any = []
  terms:any
  XData: any = []
  YData: any = []

  showValue(){
    this.num.target.classList.add('pointer-events-none')
  }
  setValue(oldValue:any,terms:any) {
    console.log(oldValue,terms);
    
    let array = this.array.map(innerArray => {
      const index = innerArray.findIndex(value => value === oldValue);
      if (index !== -1) {
        innerArray[index] = terms;
        // console.log(innerArray );
        // console.log(this.array);
        
       }
      return innerArray;
    });
    for (let i = 0; i < this.array.length; i++) {
      this.element = this.array[i];
      console.log(this.element);
      this.count = this.array[i].every((type: any) =>type==terms)
      if (this.count==true) {
       console.log('winner');
       this.setEmpty();
       this.openTab()
      } }
      
      //  this.count = this.array[i].filter((type: any) =>type==terms).length
      //  console.log(this.count);
      //  if (this.count==3) {
      //   console.log('winner');
      //  } }
    }
termCheck(el: any,item:any) {
  el.target.value=''

  this.num=el 
  this.countNumber.push(el)
  this.terms = this.terms == 'X' ? 'O' : 'X';
      if (this.terms=='X') {
        this.terms=el.target.value='X'
        // this.terms= el.target.value='X'
     this.setValue(item,this.terms)
     this.showValue()
     el.target.classList.remove('text-[#39FF14]')
     el.target.classList.remove('text-transparent')
      }
    
if (this.terms=='O') {
  this.terms=el.target.value='O'
  this.setValue(item,this.terms)
  this.showValue()
  el.target.classList.add('text-[#39FF14]')
  el.target.classList.remove('text-transparent')
}     
if (this.countNumber.length == 9) {
      this.setEmpty()
    }
  }
  setEmpty() {
    this.array=this.winningCondition
    this.terms=''
    this.num.target.classList.remove('pointer-events-none')
    }
    closeTab(){
      this.showOverlay = false
      document.body.style.overflow = "auto"
    }
  
    openTab(){
      this.showOverlay = true
      document.body.style.overflow = "hidden"
      // window.scope=this.num
    }

    
}




