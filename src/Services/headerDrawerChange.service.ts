import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})

export class headerDrawerChange {

      
  hidecontent: Boolean = true;
  hideContentHam: Boolean = true;

  
onCreateClicked(){
    this.hidecontent = !this.hidecontent;
    return this.hidecontent;
    }
    
    onHamClicked(){
      this.hideContentHam = !this.hideContentHam;
      return this.hideContentHam;
      }
}
