import { Component, DoCheck, OnChanges, OnInit, Input, OnDestroy, AfterContentInit, AfterViewInit, AfterContentChecked, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit, OnChanges,
DoCheck, OnDestroy, AfterContentInit, AfterContentChecked,
AfterViewInit,AfterViewChecked{

  @Input() change!:string //

  valor:string = 'asd'

  constructor() { console.log('Constructor') }
  
  ngOnChanges(nchanges:any){
    console.log('On Changes',nchanges)
    //trabaja con input
  }
  ngOnInit() {
    console.log('On Init')
  }
  ngDoCheck(){
    console.log('Do Check')

  }

  ngAfterContentInit(){
    console.log('Content Init')
  }
  ngAfterContentChecked(){
    console.log('ContentChecked')
  }
  ngAfterViewInitInit(){
    console.log('View InitInit')
  }
  ngAfterViewChecked(){
    console.log('View Checked')
  }



  ngOnDestroy(){
    console.log('Destuido')
  }

}