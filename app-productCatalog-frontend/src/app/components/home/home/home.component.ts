import { Component, OnInit } from '@angular/core';
import { title } from 'src/app/shared/animations/title.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  
  animations:[
    title
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
