import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: any;
  xtype: any;
  ytype: any;


  //create observable that emits click events

  ngOnInit() {
  }

  winningCondition = ['123', '231', '321', '456', '564', '654', '789', '897', '978', '147', '471', '714', '258', '582', '825', '369', '693', '936', '159', '591', '915', '357', '573', '735']
  countData = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  countNumber: any = []
  terms: string | undefined
  XData: any = []
  YData: any = []




  termCheck(el: any) {
    this.countNumber.push(el)
    console.log(this.countNumber.length);
    if (this.countNumber.length % 2 == 0) {
      this.terms = 'X'
      console.log(this.terms);
      this.XData.push(el)
      console.log(this.XData);
    
    }
    else {
      this.terms = 'O'
      this.YData.push(el)
      console.log(this.YData);
      console.log(this.terms);
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
    }
}




