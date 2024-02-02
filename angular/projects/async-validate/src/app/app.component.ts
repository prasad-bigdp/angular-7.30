import { Component } from '@angular/core';
import {UserService} from './user.service'
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AsyncValidate';
  userForm: FormGroup;
  constructor(private us: UserService,private fb:FormBuilder) {
    this.userForm = this.fb.group({
      username:['',[Validators.required],[this.validateUserName()]]
    })
  }
  validateUserName(control:AbstractControl) {
    
  }
  
}
