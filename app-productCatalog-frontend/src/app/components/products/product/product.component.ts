import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../products.service';
import { Products } from 'src/app/models/products.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public id: number;
  public product:object = [];

  constructor(private route: ActivatedRoute, private productsDataService:ProductsService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    }); 

    this.productsDataService.getProduct(this.id).subscribe((responce:Products) => {
      this.product = Object(responce);
      this.product['src'] = `../../../../assets/images/${this.product['image']}.png`;
    });
  }
}










