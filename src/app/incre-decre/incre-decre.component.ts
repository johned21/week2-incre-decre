import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'incre-decre',
  templateUrl: './incre-decre.component.html',
  styleUrls: ['./incre-decre.component.css']
})
export class IncreDecreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  resultNum = 0;
  rndNumber = (Math.random() * 10).toFixed(0);
  
  Increment(){
    this.resultNum = this.resultNum += Math.floor(Math.random()*10);
  }
  Decrement(){
    this.resultNum = this.resultNum -= Math.floor(Math.random()*10);
  }
}
