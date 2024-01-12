import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class loginValidator {
  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const password = control.value;

      // Check if the password is at least 8 characters long
      if (password && password.length < 8) {
        return { 'passwordLength': true };
      }

      // Check if the password contains a mixture of numbers, letters, and symbols
      const pattern = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).*$/;
      if (password && !pattern.test(password)) {
        return { 'passwordComplexity': true };
      }

      return null; // Password is valid
    };
  }
}
