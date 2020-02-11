import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankComponent } from '../views/pages/blank/blank.component';
import { HomeComponent } from '../views/pages/home/home.component';
import { ProductComponent } from '../views/pages/product/product.component';


const routes: Routes = [
  { path: '', component: BlankComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
