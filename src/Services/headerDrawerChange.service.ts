import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})

export class headerDrawerChange {


  hidecontent: Boolean = true;
  hideContentHam: Boolean = true;
  hideContentHamEvent = new EventEmitter<any>();


  onCreateClicked() {
    this.hidecontent = !this.hidecontent;
    return this.hidecontent;
  }
  //for ham event
  emitHamEvent() {
    this.hideContentHam = !this.hideContentHam;
    this.hideContentHamEvent.emit(this.hideContentHam)
  }
  onEmitHamEvent(action :(data : any) => void) {
    this.hideContentHamEvent.subscribe(action)
  }
}
