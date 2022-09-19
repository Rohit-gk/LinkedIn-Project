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

  ngOnInit()
  {
    // this.registerForm = this.formBuilder.group({
    //   firstName: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
    //   lastName: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
    //   location: ['', Validators.required],
    //   mobile: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
    //   birthDate: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    //   email: ['', Validators.required],
    //   address: ['', Validators.required],
    //   organization: ['', Validators.required],
    //   uploadCV: ['', Validators.required]
      
    // });
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

