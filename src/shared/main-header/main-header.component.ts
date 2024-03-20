import { Component } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent {
 
  hidecontent: Boolean = true;
  hideContentHam: Boolean = true;

onCreateClicked(){
this.hidecontent = !this.hidecontent;
}

onHamClicked(){
  this.hideContentHam = !this.hideContentHam;
  }
}
