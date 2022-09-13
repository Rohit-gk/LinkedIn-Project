import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  registerForm: any = FormGroup;
  submitted = false;

  ngOnInit()
  {
    this.registerForm = this.formBuilder.group({
      empno: ['', Validators.required],
      firstName: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      middleName: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      dept: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      workPhone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      salaryDueOn: ['', Validators.required],
      location: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      
    });
  }

  get f() { return this.registerForm.controls; }
}

