import { Component } from '@angular/core';
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
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {    
    this.testWinningCondition()
  }

  winningCondition = ['123', '231', '321', '456', '564', '654', '789', '897', '978', '147', '471', '714', '258', '582', '825', '369', '693', '936', '159', '591', '915', '357', '573', '735']
  countData = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  countNumber: any = []
  terms:string |undefined
  XData: any = []
  YData: any = []
  setValue(id: string, value: any) {
    this.elementRef.nativeElement.querySelector(`#${id}`).value = value;
  }
  
termCheck(el: any) {
    this.countNumber.push(el)
    console.log(this.countNumber.length);
      this.terms = this.terms === 'X' ? 'O' : 'X';
      console.log(this.terms);
      if (this.terms=='X') {
        this.XData.push(el)
      console.log(this.XData);
      }
      
if (this.terms=='O') {
  this.YData.push(el)
  console.log(this.YData);
  console.log(this.terms);
}     
    if (this.countNumber.length == 9 || this.XData.length == 3 || this.YData.length == 3) {
      this.winnerTest()
    }

  }

  winnerTest() {
    this.testWinningCondition()
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

    testWinningCondition(){
      let xdata=['1','3','2','4']
      let data =xdata.sort((a:any, b:any) => parseFloat(a) - parseFloat(b))
      let c=data.slice(0,3).join('')
      console.log(c);
      


}
}




