import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import firebase  from 'firebase/compat/app';
import { NumberFormatStyle } from '@angular/common';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signUpForm!: FormGroup;
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  initForm(){
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.pattern( /[0-9a-zA-Z]{6,}/ )]]
    });
  }

  methode(email: string){
    const numero: number = 1;
    // if else
    return numero;
  }

  onSubmit(){
    const email = this.signUpForm.value['email']; //this.signUpForm.get('email').value;
    const password = this.signUpForm.value['password']; //this.signUpForm.get('password').value;
    
    
    this.authService.signInUser(email, password).then(
        () => { this.router.navigate(['/books']); 
                this.authService.privilege = this.methode(email);
              },
        (error) => { this.errorMessage = error; }
      );
  }

  ngOnInit(): void {
    this.initForm();
  }

}
