import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

interface FormModel{
  username: string,
  email: string,
  password:string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'reactiveForm';
  myForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      username: [ '', [ Validators.required, Validators.minLength(3) ] ],
     
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  submit() {
    console.log(this.myForm)
    if (this.myForm.valid) {
      const formData: FormModel = this.myForm.value;
      console.log(formData)
   }


  }
}
