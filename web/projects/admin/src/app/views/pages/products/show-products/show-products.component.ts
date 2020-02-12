import { Component, OnInit } from '@angular/core';
import {Product} from '../../../../models/product';
import {ProductService} from '../../../../services/product.service';
import {Member} from '../../../../models/member';
import {ActivatedRoute} from '@angular/router';
import {MembersService} from '../../../../services/members.service';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {

  productId: number;
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.productId = this.route.snapshot.params.productId;
  }

  ngOnInit() {
    this.loadPoduct();
  }

  loadPoduct() {
    this.productService.findById(this.productId).subscribe(response => {
      this.product = response;
    });
  }
}
