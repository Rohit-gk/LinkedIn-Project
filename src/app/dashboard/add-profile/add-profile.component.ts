import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddProfileRequest } from 'src/app/Models/profile.models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css']
})
export class AddProfileComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router:Router,private api:ApiService) { }

  registerForm: any = FormGroup;
  submitted = false;

  profile : AddProfileRequest = {
    firstName:'',
    lastName:'',
    location:'',
    mobile:'',
    birthDate:'',
    email:'',
    address:'',
    organization:'',
    uploadCV:''
  }

  ngOnInit(){
    
  }
  

  get f() { return this.registerForm.controls; }

  onSubmit(){
    this.api.addProfile(this.profile).subscribe(
      data =>{
       this.router.navigate(['dashboard/profilelist'])
      }
  )
  }

  goProfilePage(){
    this.router.navigate(['dashboard/profile'])
  }
}

