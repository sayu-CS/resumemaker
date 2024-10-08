import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing-header',
  templateUrl: './header-landing.component.html',
  styleUrls: ['./header-landing.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  hideBar:boolean = true;
  hideLogin: boolean = false;

  @ViewChild('selectPage', {static: false}) selectedPage!: ElementRef;

  ngOnInit(): void {
   this.hideBar = false;
   
  }

  ngAfterViewInit(): void {
    const data = this.selectedPage.nativeElement.firstChild.data
    
    //checks which page is calling the header.
    switch (data){
      case 'Signup':
        this.hideLogin = true;
        break;
      case 'Login':
        this.hideLogin = true;
        break;
    }

  }


  hidesidebar() {
    this.hideBar = !this.hideBar;
    
  }
 
}
