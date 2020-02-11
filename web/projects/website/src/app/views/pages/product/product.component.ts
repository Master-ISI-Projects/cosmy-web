import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product} from '../../../models/product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.fetchElements();
  }

  fetchElements() {
    this.service.getAll().subscribe(response => {
      this.products = response;
    });
  }

}
