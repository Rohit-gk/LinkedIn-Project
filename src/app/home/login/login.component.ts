import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any = FormGroup;
  loading = false;
  submitted = false;
  isSuccessful = false;
  isSignUpFailed = false;
  message = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private api:ApiService,
    private token:TokenService
  ) { }

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  goToDashboard(){
    this.submitted = true;
    this.isSignUpFailed = false;
    // if (this.loginForm.invalid) {
    //   return
    // }
    this.api.login(this.loginForm.value).subscribe(val => {
      //  if (val.result) {
        this.token.setToken(val.result)
         this.isSuccessful = true;
        setTimeout(() => {
          this.router.navigate(['dashboard/posts'])
        }, 2000);
      // }
    },
      error => {
        this.message = " Invalid username and password please try again...";
        this.isSignUpFailed = true;
      }
    );
   
  }
}
