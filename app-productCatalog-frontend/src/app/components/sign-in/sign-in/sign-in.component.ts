import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { User } from '../../../models/users.model';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public form: FormGroup;
  private minLength: number = 3;
  private maxLength: number = 20;

  public notFound: boolean = false;
  public invalid: boolean = false;
  public errorForm: string = 'Fill in the form correctly!';

  private prefix = '*пароль должен содержать хотя бы';
  public items: any = [
    `${this.prefix} одно число.`,
    `${this.prefix} один спецсимвол(!@#$%^&*).`,
    `${this.prefix} одну латинскую букву в нижнем регистре.`,
    `${this.prefix} одну латинскую букву в верхнем регистре.`,
    `${this.prefix} 6 вышеупомянутых символов.`,
  ]

  constructor(private signUpService: SignInService) { }

  //validation ----------------------

  ngOnInit() {

    this.form = new FormGroup({

      username: new FormControl('', [
        Validators.required,
        this.checkForLength.bind(this),
        Validators.pattern('[a-zA-Z]*')
      ]),

      password: new FormControl('', [
        Validators.required,
        Validators.pattern('(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}')
      ]),
    });
  }


  checkForLength(control: FormControl) {
    if (control.value.length > this.maxLength || control.value.length < this.minLength) {
      return {
        'lengthError': true
      };
    }
    return null;
  }

  getErrorUsername() {
    return this.form.get('username').hasError('required') ? 'The field is not filled' :
      this.form.get('username').hasError('lengthError') ? 'Length from 3 to 20 characters' :
        this.form.get('username').hasError('pattern') ? 'Latin letters only' : false;
  }

  getErrorPassword() {
    return this.form.get('password').hasError('required') ? 'The field is not filled' :
      this.form.get('password').hasError('pattern') ? 'Please enter a valid password' : false;
  }


  //sending data -----------------------

  onSubmit() {
    if (!this.form.invalid) {
      const user: User = {
        username: this.form.get('username').value,
        password: this.form.get('password').value
      }
      this.signUpService.authUser(user).subscribe((responce) => {
        if (responce['length'] > 0) {
          window.localStorage.id = responce[0]['id'];
          window.localStorage.userName = responce[0]['username'];

          //get token server generated
          window.localStorage.token = "token test"  //response[0]token

        } else { 
          this.notFound = true;
        }
      });
    } else {
      this.invalid = true;
    }
  }
}





