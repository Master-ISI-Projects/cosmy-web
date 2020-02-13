import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankComponent } from '../views/pages/blank/blank.component';
import { HomeComponent } from '../views/pages/home/home.component';
import { ProductComponent } from '../views/pages/product/product.component';
import { ProductDetailComponent } from '../views/pages/product-detail/product-detail.component';
import { BlogComponent } from '../views/pages/blog/blog.component';
import { BlogDetailComponent } from '../views/pages/blog-detail/blog-detail.component';
import { ShoppingCartComponent } from '../views/pages/shopping-cart/shopping-cart.component';
import { AboutComponent } from '../views/pages/about/about.component';
import { ContactComponent } from '../views/pages/contact/contact.component';



const routes: Routes = [
  { path: '', component: BlankComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductComponent },
  { path: 'product-detail/:productId', component: ProductDetailComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog-detail/:postId', component:   BlogDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contactus', component: ContactComponent },
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
