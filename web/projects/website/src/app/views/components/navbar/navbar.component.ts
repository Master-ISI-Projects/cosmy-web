import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public  nbrCart : number;
  constructor(private productService: ProductService) { }
  
  ngOnInit() {
    this.nbrCart = this.productService.getLocalCartProducts().length;
  }
  

}
