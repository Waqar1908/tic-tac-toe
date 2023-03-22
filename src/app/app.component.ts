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
  xtype!: string;
  ytype!: string;
 

//create observable that emits click events

  ngOnInit(){
    let a=321
    console.log(a);
    for (let i = 0; i < this.winningCondition.length; i++) {
      const element = this.winningCondition[i];
      // console.log(element);
      
    
    }
    if (this.winningCondition.includes(a)) {
      console.log('true');  
    }

  }

  winningCondition=[123,231,321,456,564,654,789,897,978,147,471,714,258,582,825,369,693,936,159,591,915,357,573,735]
  countData=['1','2','3','4','5','6','7','8','9']
  countNumber:any = []
  terms:string |undefined
  XData:any=[]
  YData:any=[]



  termCheck(el:any){
    this.countNumber.push(el)
    // console.log(this.countNumber.length);
    if (this.countNumber.length%2==0) {
      this.terms='X'
      console.log(this.terms);
      this.XData.push(el)
      if (this.XData.length==3) {
      console.log(this.XData.join(''));
      this.xtype=(typeof Number(this.XData));
      this.winnerTest()

       
      }
    }
    else{
      this.terms='O'
      console.log(this.terms);
      if (this.YData.length<3) {

      this.YData.push(el)
      console.log(this.YData.join(''));
      this.ytype=(typeof Number(this.YData));

      this.winnerTest()

      } }

    

   
    }

    winnerTest(){
        for (let i = 0; i < this.winningCondition.length; i++) {
          const element = this.winningCondition[i];
          // console.log(element);
        }
        if (this.winningCondition.includes(this.XData)) {
          console.log('x is winner');
          
          
        }
        
          if (this.winningCondition.includes(this.YData)) {
            console.log('y is winner');
            }
          // else{
          //   console.log('draw');
            
          // }
        
      }
    }




