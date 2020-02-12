import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  productId: number;
  productsSimilaire: Product[] = [];
  categoryFilter: string = '';

  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.productId = this.route.snapshot.params.productId;
    console.log(this.productId);
  }

  ngOnInit() {
    this.productService.getProductById(this.productId).subscribe(response => {
      this.product =  response;
      this.categoryFilter = this.product.category;
      this.getAllProductsSimilaire();

    });
  }

  getAllProductsSimilaire() {
    this.productService.getAll(this.categoryFilter).subscribe(response => {
      this.productsSimilaire = response;
    });
  }

  addToCart(product: Product) {
		this.productService.addToCart(product);
	}
  
}




