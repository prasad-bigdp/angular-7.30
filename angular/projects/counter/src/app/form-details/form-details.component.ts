import { Component } from '@angular/core';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrl: './form-details.component.css'
})
export class FormDetailsComponent {
  name!: string
  email!: string
  password!: string;
  inputChange(e)
  {
    console.log(w)
  }
}
