import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { loginValidator } from 'src/Services/login.validator';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class signupPageComponent implements OnInit{
constructor(private logValid: loginValidator){}

 loginForm !: FormGroup;

 ngOnInit(): void {
   this.loginForm = new FormGroup ({
    'Email' : new FormControl('', [Validators.required,Validators.email]),
    'Password' : new FormControl('', [Validators.required,Validators.minLength(8),this.logValid.passwordValidator()]),
    'Re-Password' : new FormControl('', Validators.required)
  },{validators: this.logValid.passwordMatchValidator() });
 }
 onSubmit() {
  console.log(this.loginForm)
 }
 
}
//need to add async validator to check if email is already there.
//need to do google auth