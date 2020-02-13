import { Component, OnInit } from '@angular/core';
import {Member} from '../../../../models/member';
import {MembersService} from '../../../../services/members.service';
import {Router} from '@angular/router';
import {ProductService} from '../../../../services/product.service';
import {Product} from '../../../../models/product';
import {Category} from '../../../../models/category';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css']
})
export class CreateProductsComponent implements OnInit {

  newProduct: Product = {
    applicationProtocol: '',
    category: '',
    createdAt: new Date().toDateString(),
    description: '',
    favourite: false,
    image: 'assets/images/product/product-' + (Math.floor(Math.random() * 12) + 1) + '.jpg',
    inSolde: false,
    pourcentagePromotion: 0,
    price: '0',
    productSeller: '',
    qte: 0,
    title: '',
    video: '',
    weight: '',
  };
  categories: Category[];

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.productService.getAllCategories()
      .subscribe(response => {
        this.categories = response;
      });
  }

  saveProduct() {
    console.log(this.newProduct);
    this.productService.save(this.newProduct)
      .subscribe(response => {
        this.router.navigate(['products']);
      });
  }

}
