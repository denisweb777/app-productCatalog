import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title:string = 'app-productCatalog-frontend';
  public user: string = 'guest';
  public auth: boolean = false;
  public color1: string = null;
  public color2: string = null;

  constructor(private router: Router) { }

  ngDoCheck():void { 
    if (window.localStorage.id) { 
      this.user = window.localStorage.userName;
      this.auth = true;
    }
  }

  signOut():void { 
    window.localStorage.clear();
    this.auth = false;
    this.user = 'guest';

    this.router.navigate(['home']);
  }

  account():void { 
    this.router.navigate(['account']);
  }

  addColor1():void { 
    this.color1 = "#DFDAD9";
  }

  addColor2():void { 
    this.color2 = "#DFDAD9";
  }

  removeColor1():void { 
    this.color1 = "#FFFFFF";

  }
  removeColor2():void { 
    this.color2 = "#FFFFFF";
  }
}

