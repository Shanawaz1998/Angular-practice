import { Component } from '@angular/core';
import {NgForm, FormControl, FormGroup, Validator, Validators} from '@angular/forms'



@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  data:any={};
  registerData(value:NgForm){
    this.data=value;

    console.log(value)
  }

  reactiveForm = new FormGroup({
    user : new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$') ]),
    Password : new FormControl('',[Validators.required, Validators.minLength(3) ])
  })
  login(){
    console.log(this.reactiveForm.value);
  }
  get userField(){
    
    return this.reactiveForm.get('user')
  }
  get passwordField(){ 
    return this.reactiveForm.get('Password')
  }

}