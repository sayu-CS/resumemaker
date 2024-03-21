import { Component, ElementRef, ViewChild } from '@angular/core';
import { headerDrawerChange } from 'src/Services/headerDrawerChange.service';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent {
  constructor( private header: headerDrawerChange) {}

  contents: string[] = ['Resume 1', 'Content 2', 'Content 3', 'Content 4', 'Content 5'];
  currentIndex: number = 0;
  currentContent: string = this.contents[0];
  currentContent1: string = this.contents[1];
  currentContent2: string = this.contents[2];
  close: Boolean = this.header.onHamClicked();

  

  ngOnInit(): void {
  }

  moveLeft() {
    this.currentIndex = (this.currentIndex - 1 + this.contents.length) % this.contents.length;
    this.currentContent = this.contents[this.currentIndex];
    this.currentContent1 = this.contents[this.currentIndex+1];
    this.currentContent2 = this.contents[this.currentIndex+2];
  }

  moveRight() {
    this.currentIndex = (this.currentIndex + 1) % this.contents.length;
    this.currentContent = this.contents[this.currentIndex];
    this.currentContent1 = this.contents[this.currentIndex+1];
    this.currentContent2 = this.contents[this.currentIndex+2];
  }
}
