import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ReviewsService } from '../reviews.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Reviews } from 'src/app/models/reviews.model';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  public comments;
  public rating: number = 0;
  public text: string = '';
  public idProduct:number = null;

  public canvases: object;

  @ViewChild('autosize', { static: false }) autosize: CdkTextareaAutosize;

  @ViewChild('canvas1', { static: true }) canvas1: ElementRef<HTMLCanvasElement>;
  @ViewChild('canvas2', { static: true }) canvas2: ElementRef<HTMLCanvasElement>;
  @ViewChild('canvas3', { static: true }) canvas3: ElementRef<HTMLCanvasElement>;
  @ViewChild('canvas4', { static: true }) canvas4: ElementRef<HTMLCanvasElement>;
  @ViewChild('canvas5', { static: true }) canvas5: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;

  constructor(private reviewsService: ReviewsService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.canvases = { canvas1: this.canvas1, canvas2: this.canvas2, canvas3: this.canvas3, canvas4: this.canvas4, canvas5: this.canvas5 }

    for (const key in this.canvases) {

      this.ctx = this.canvases[key].nativeElement.getContext('2d');
      this.ctx.save();
      this.ctx.strokeStyle = "#3F51B5";
      this.ctx.lineWidth = 1;
      this.ctx.beginPath();
      this.ctx.moveTo(0, 7.8);
      this.ctx.lineTo(7.6, 7.8);
      this.ctx.lineTo(10, 0);
      this.ctx.lineTo(12.4, 7.8);
      this.ctx.lineTo(20, 7.8);
      this.ctx.lineTo(13.8, 11.2);
      this.ctx.lineTo(16.2, 20);
      this.ctx.lineTo(10, 15.2);
      this.ctx.lineTo(3.8, 20);
      this.ctx.lineTo(6.2, 12.4);
      this.ctx.closePath();
      this.ctx.stroke();
      this.ctx.restore();
    }

    // get comment -----------------------------------

    this.getComment();

  }

  //canvas 1 ---------------------------------

  mouseenter1() {
    for (const key in this.canvases) {
      if (this.canvases[key] == this.canvas1) {
        this.ctx = this.canvases[key].nativeElement.getContext('2d');
        this.ctx.fillStyle = "#3F51B5";
        this.ctx.fill();
      }
    }
    this.rating = 1;
  }

  mouseover1() {
    for (const key in this.canvases) {
      if (this.canvases[key] == this.canvas3 || this.canvases[key] == this.canvas4 || this.canvases[key] == this.canvas5) {
        this.ctx = this.canvases[key].nativeElement.getContext('2d');
        this.ctx.fillStyle = "#3F51B5";
        this.ctx.fill();
      }
      this.ctx = this.canvases[key].nativeElement.getContext('2d');
      this.ctx.fillStyle = "#ffffff";
      this.ctx.fill();
    }
  }

  //canvas 2 -----------------------------------

  mouseenter2() {
    for (const key in this.canvases) {
      if (this.canvases[key] == this.canvas1 || this.canvases[key] == this.canvas2) {
        this.ctx = this.canvases[key].nativeElement.getContext('2d');
        this.ctx.fillStyle = "#3F51B5";
        this.ctx.fill();
      }
    }
    this.rating = 2;
  }

  mouseover2() {
    for (const key in this.canvases) {
      this.ctx = this.canvases[key].nativeElement.getContext('2d');
      this.ctx.fillStyle = "#ffffff";
      this.ctx.fill();
    }
  }

  //canvas 3 -----------------------------------

  mouseenter3() {
    for (const key in this.canvases) {
      if (this.canvases[key] !== this.canvas4 && this.canvases[key] !== this.canvas5) {
        this.ctx = this.canvases[key].nativeElement.getContext('2d');
        this.ctx.fillStyle = "#3F51B5";
        this.ctx.fill();
      }
    }
    this.rating = 3;
  }

  mouseover3() {
    for (const key in this.canvases) {
      if (this.canvases[key] == this.canvas5) {
        this.ctx = this.canvases[key].nativeElement.getContext('2d');
        this.ctx.fillStyle = "#3F51B5";
        this.ctx.fill();
      }
      this.ctx = this.canvases[key].nativeElement.getContext('2d');
      this.ctx.fillStyle = "#ffffff";
      this.ctx.fill();
    }
  }

  //canvas 4 -------------------------------------

  mouseenter4() {
    for (const key in this.canvases) {
      if (this.canvases[key] !== this.canvas5) {
        this.ctx = this.canvases[key].nativeElement.getContext('2d');
        this.ctx.fillStyle = "#3F51B5";
        this.ctx.fill();
      }
    }
    this.rating = 4;
  }

  mouseover4() {
    for (const key in this.canvases) {
      this.ctx = this.canvases[key].nativeElement.getContext('2d');
      this.ctx.fillStyle = "#ffffff";
      this.ctx.fill();
    }
  }

  //canvas 5 -------------------------------------

  mouseenter5() {
    for (const key in this.canvases) {
      this.ctx = this.canvases[key].nativeElement.getContext('2d');
      this.ctx.fillStyle = "#3F51B5";
      this.ctx.fill();
    }
  }

  mouseover5() {
    for (const key in this.canvases) {
      this.ctx = this.canvases[key].nativeElement.getContext('2d');
      this.ctx.fillStyle = "#ffffff";
      this.ctx.fill();
    }
    this.rating = 5;
  }

  //add comment ----------------------------------------------------

  addComment() {

    if (window.localStorage.id && window.localStorage.token) {

      const comment: Reviews = {
        rate: this.rating,
        text: this.text === ''?'no comment':this.text,
        id_user: window.localStorage.id,
        username: window.localStorage.userName
      }
  
      this.reviewsService.postReviews(comment).subscribe((responce) => {
        console.log(responce);
      });
  
      //----------------------------------------
  
      this.getComment();
    }
    else { 
      alert('Sign in to leave a comment!');
    }
  }

  getComment() { 
    this.reviewsService.getReviews().subscribe((responce) => {
      const comments = Object(responce).reverse();
      this.comments = comments;
    });
  }
}









