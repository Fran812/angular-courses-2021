import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  //@Input('hdata') pintarDatos:any;

  //creamos una variable output | ouput personalizado
  @Output() onSendData = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {
  }
  //nosostros decimos en que momento saldra del componentDe
  //haciendo click, etc-

  //definimos una function
  onClickTest(event:Event){
    console.log(event)
    //usamos el ouput personalizado | y usamos el emit
    //para enviar lo queramos array,json,ect.
    this.onSendData.emit({
      name:'Francisco',
      age:20
    })
  }
}