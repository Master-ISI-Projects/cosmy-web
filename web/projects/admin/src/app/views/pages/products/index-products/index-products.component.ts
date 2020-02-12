import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../../services/product.service';
import {Product} from '../../../../models/product';

@Component({
  selector: 'app-index-products',
  templateUrl: './index-products.component.html',
  styleUrls: ['./index-products.component.css']
})
export class IndexProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.findAll()
      .subscribe(response => {
        console.log(response);
        this.products = response;
      });
  }

}
