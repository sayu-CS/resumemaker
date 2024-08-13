import { Component } from "@angular/core";
import { headerDrawerChange } from "src/Services/headerDrawerChange.service";

@Component({

    selector: "app-mbac",
    templateUrl: "./mbac.component.html",
    styleUrls: ['./mbac.component.css']
})

export class mbacComponent {
    constructor(private header: headerDrawerChange){}
//please fetch the resumes names in the contents
//please show previews here
    contents: string[] = ['Resume 1', 'Content 2', 'Content 3', 'Content 4', 'Content 5'];
    currentIndex: number = 0;
    currentContent: string = this.contents[0];
    currentContent1: string = this.contents[1];
    currentContent2: string = this.contents[2];
  
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