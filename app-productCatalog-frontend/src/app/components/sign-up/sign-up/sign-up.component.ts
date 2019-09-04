import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../sign-up.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private signUpService:SignUpService) { }

  ngOnInit() { }

  click() { 
    this.signUpService.addUser();
  }
}


