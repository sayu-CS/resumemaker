import { Component } from '@angular/core';
import { headerDrawerChange } from 'src/Services/headerDrawerChange.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent {
 
  constructor(private header: headerDrawerChange){}

  hidecontent: Boolean = this.header.hidecontent;
  hideContentHam: Boolean = this.header.hideContentHam;

onCreateClicked(){
  this.hidecontent = this.header.onCreateClicked();
}

onHamClicked(){
 this.hideContentHam = this.header.onHamClicked();
  }

}
