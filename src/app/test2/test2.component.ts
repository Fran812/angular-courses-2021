import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit{
  @Input() reciboDatos:string='';
  @Output() ouSendData = new EventEmitter<any>();
  myval:number = 6;
  myva2:number = 2;
  constructor() { }
  ngOnInit(){

  }
  sendAny(){
    this.ouSendData.emit({
      id:0,
      name:'lucas'
    })
  }
  test(){
    console.log(this.myval+this.myva2)
  }
}