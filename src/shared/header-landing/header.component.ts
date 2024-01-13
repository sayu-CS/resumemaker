import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
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
      case 'Login':
        this.hideLogin = true
    }

  }


  hidesidebar() {
    this.hideBar = !this.hideBar;
    
  }
 
}
