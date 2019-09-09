import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  public comments: object;
  public user:string;

  constructor(private accountService:AccountService) { }

  ngOnInit() {

    this.user = window.localStorage.userName;

    this.accountService.getComments(this.user).subscribe((responce) => {
      console.log(responce);
      this.comments = responce;
    });
  }
}
