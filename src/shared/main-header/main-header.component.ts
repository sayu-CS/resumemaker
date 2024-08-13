import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { headerDrawerChange } from 'src/Services/headerDrawerChange.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit, OnDestroy {

  constructor(private header: headerDrawerChange) { }

  hidecontent: Boolean = this.header.hidecontent;
  hideContentHam: Boolean = this.header.hideContentHam;
  private unsubsribeHideContentHam: Subscription| any;

  ngOnInit(): void {   
this.unsubsribeHideContentHam = this.header.onEmitHamEvent((data:any)=> {
this.hideContentHam = data;
  })}

  onCreateClicked() {
    this.hidecontent = this.header.onCreateClicked();
  }

  onHamClicked() {
    this.header.emitHamEvent();
  }

  ngOnDestroy(): void {
  if(this.unsubsribeHideContentHam){
    this.unsubsribeHideContentHam.unsubsribe();
  }
}

}
