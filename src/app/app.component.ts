import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
count=0;
  title: any;
  ngOnInit(){
    // let a=321
    // console.log(a);
    // for (let i = 0; i < this.winningCondition.length; i++) {
    //   const element = this.winningCondition[i];
    //   console.log(element);
      
    
    // }
    // if (this.winningCondition.includes(321)) {
    //   console.log('true');
   
      
      
    // }

  }

  winningCondition=[123,231,321,456,564,654,789,897,978,147,471,714,258,582,825,369,693,936,159,591,915,357,573,735]



  termCheck(){

  }

}


