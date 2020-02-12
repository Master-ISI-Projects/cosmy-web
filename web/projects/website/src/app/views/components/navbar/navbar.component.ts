import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product} from '../../../models/product';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  nbrCart : number;
  constructor(private productService: ProductService) { }
  
  ngOnInit() {
    this.nbrCart = this.productService.getLocalCartProducts().length;
  }
  

}
