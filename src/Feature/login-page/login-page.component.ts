import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

   loginForm!: FormGroup;

   ngOnInit(): void {
     this.loginForm = new FormGroup({
      'Email' : new FormControl(null,Validators.required),
      'Password' : new FormControl(null,Validators.required)
     })
   }

   onSubmit(){
    
   }
}
