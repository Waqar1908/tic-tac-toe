import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { count, map, scan } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
count1=0;
  title: any;
  xtype: any;
  ytype: any;
 

//create observable that emits click events

  ngOnInit(){
    // let a='321'
    // console.log(a);
    // for (let i = 0; i < this.winningCondition.length; i++) {
    //   const element = this.winningCondition[i];
    //   // console.log(element);
    //    }
    // if (this.winningCondition.includes(a)) {
    //   console.log('true');  
    // }

  }

  winningCondition=['123','231','321','456','564','654','789','897','978','147','471','714','258','582','825','369','693','936','159','591','915','357','573','735']
  countData=['1','2','3','4','5','6','7','8','9']
  countNumber:any = []
  terms:string |undefined
  XData:any=[]
  YData:any=[]
  



  termCheck(el:any){
    this.countNumber.push(el)
    const termsTypeX=this.countNumber.length%2==0;
   const termsTypeY=this.countNumber.length%2==1;
    console.log(termsTypeY);
    
    // console.log(this.countNumber.length);
    if (termsTypeX) {
      this.terms='X'
      console.log(this.terms);
      this.XData.push(el)
      if (this.XData.length==3) {
      this.XData=(this.XData.join(''));
      console.log(this.XData);
     this.winnerTest()
    }
    else{
      this.XData.push(el)
    }
    }
    if (termsTypeY) {
      this.terms='O'
      this.YData.push(el)

      console.log(this.terms);
      if (this.YData.length==3) {
 this.YData=(this.YData.join(''));
 console.log(this.YData);

 this.winnerTest()
 } 
 else{
  this.YData.push(el)

 }
      
    }

   }

    winnerTest(){
       this.xtype=this.winningCondition.includes(this.XData)
       this.ytype=this.winningCondition.includes(this.YData)
        if (this.xtype) {
          console.log('x is winner');
      }
        if (this.ytype) {
            console.log('y is winner');
            }
       if (!this.xtype && !this.ytype && this.countNumber==9) {
        console.log('draw');
        
        
       }
        
      }
    }




