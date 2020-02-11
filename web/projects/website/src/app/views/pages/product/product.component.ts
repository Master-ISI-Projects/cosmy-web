import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product} from '../../../models/product';
import { Category} from '../../../models/category';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  categories: Category[] = [];
  categoryFilter: string = '';
  
  constructor(private service: ProductService) { }

  ngOnInit() {
    this.getAllProducts();
    this.getAllCategories();
  }

  getAllProducts() {
    this.service.getAll(this.categoryFilter).subscribe(response => {
      this.products = response;
    });
  }

  getAllCategories() {
    this.service.getAllCategories().subscribe(response => {
      this.categories = response;
    });
  }

  applyFilter(category: string) {
    console.log(category)
    this.categoryFilter = category;
    this.getAllProducts();
  }

}
