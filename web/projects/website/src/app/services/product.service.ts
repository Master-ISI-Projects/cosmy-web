import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from '../models/product';
import { Category } from '../models/category';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private URL: string = environment.baseUrl;

  // NavbarCounts
  navbarCartCount = 0;
  navbarFavProdCount = 0;

  constructor(public http: HttpClient) { }

  getAll(category: string = '') {
    let filter = '?_sort=createdAt&_order=desc';
    if (category) {
      filter += '&category=' + category;
    }

    return this.http.get<Product[]>(this.URL +  '/products' + filter);
  }

  getAllCategories() {
    return this.http.get<Category[]>(this.URL +  '/categories');
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(this.URL + '/products/' + id);
  }


  /*
   ----------  Cart Product Function  ----------
  */
  // Adding new Product to cart db if logged in else localStorage
	addToCart(data: Product): void {
		let a: Product[];
    data.qty = 1;
		a = JSON.parse(localStorage.getItem('avct_item')) || [];

		a.push(data);
		setTimeout(() => {
			localStorage.setItem('avct_item', JSON.stringify(a));
			this.calculateLocalCartProdCounts();
		}, 500);
	}

	// Removing cart from local
	removeLocalCartProduct(product: Product) {
		const products: Product[] = JSON.parse(localStorage.getItem('avct_item'));

		for (let i = 0; i < products.length; i++) {
			if (products[i].id === product.id) {
				products.splice(i, 1);
				break;
			}
		}
		// ReAdding the products after remove
		localStorage.setItem('avct_item', JSON.stringify(products));

		this.calculateLocalCartProdCounts();
	}

	// Fetching Locat CartsProducts
	getLocalCartProducts(): Product[] {
		const products: Product[] = JSON.parse(localStorage.getItem('avct_item')) || [];

		return products;
	}

	// returning LocalCarts Product Count
	calculateLocalCartProdCounts() {
		this.navbarCartCount = this.getLocalCartProducts().length;
	}
}
