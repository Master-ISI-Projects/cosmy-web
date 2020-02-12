import { Component, OnInit} from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product} from '../../../models/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  	cartProducts: Product[];
	showDataNotFound = true;
	totalValue = 0;

	// Not Found Message
	messageTitle = 'No Products Found in Cart';
	messageDescription = 'Please, Add Products to Cart';

	constructor(private productService: ProductService) {}

	ngOnInit() {
		this.getCartProduct();
	}

	

	removeCartProduct(product: Product) {
		this.productService.removeLocalCartProduct(product);

		// Recalling
		this.getCartProduct();
	}

	getCartProduct() {
		this.cartProducts = this.productService.getLocalCartProducts();
		}

}
