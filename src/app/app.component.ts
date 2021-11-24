import { Component, EventEmitter } from '@angular/core';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularcourse2021';

  arregloPersonas:any[]=[
    {id:0,name:'fran'},
    {id:1,name:'lucas'},
    {id:2,name:'carlos'},
    {id:3,name:'julio'},
    {id:4,name:'marcos'}
  ]

  printData(event:Event){
    console.log('obj',event)
  }


}
