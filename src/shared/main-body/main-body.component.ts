import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { headerDrawerChange } from 'src/Services/headerDrawerChange.service';


@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit, OnDestroy{
  
constructor (private header: headerDrawerChange){}
 
hideMBAC : boolean = true;
unsubscribeMBAC: Subscription | any;

ngOnInit(): void {
this.unsubscribeMBAC = this.header.onEmitHamEvent((data: any)=> {
  this.hideMBAC = data;
})
}


ngOnDestroy(): void {
  if (this.unsubscribeMBAC){
    this.unsubscribeMBAC.unsubsribe();
  }
}
}
