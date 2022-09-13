import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css']
})
export class AddProfileComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  registerForm: any = FormGroup;
  submitted = false;

  ngOnInit()
  {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      location: ['', Validators.required],
      mobile: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      bdate: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      email: ['', Validators.required],
      address: ['', Validators.required],
      organization: ['', Validators.required],
      language: ['', Validators.required]
      
    });
  }

  get f() { return this.registerForm.controls; }
}
