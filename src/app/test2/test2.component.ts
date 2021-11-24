import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  @Input() reciboDatos:string='';
  @Output() ouSendData = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  sendAny(event:Event){
    this.ouSendData.emit({
      id:0,
      name:'lucas'
    })
  }

}