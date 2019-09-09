import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Products } from 'src/app/models/products.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: object = [];

  constructor(private productsDataService: ProductsService) { }

  ngOnInit() {
    this.productsDataService.getProducts().subscribe((responce:Products) => {
      this.products = responce;
    });
  }

  srcImg(image) {
    return "../../../../assets/images/" + image + ".png";
  }
}