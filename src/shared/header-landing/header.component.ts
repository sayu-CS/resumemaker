import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  hideBar:boolean = true;
  
  ngOnInit(): void {
   this.hideBar = false;
  }

  hidesidebar() {
    this.hideBar = !this.hideBar;
    console.log(this.hideBar)
  }
 
}
