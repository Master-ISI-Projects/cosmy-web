import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankComponent } from '../views/pages/blank/blank.component';
import {MainComponent} from '../views/layouts/main/main.component';
import {AuthComponent} from '../views/layouts/auth/auth.component';
import {LoginComponent} from '../views/pages/login/login.component';
import { DashboardComponent } from '../views/pages/dashboard/dashboard.component';
import {IndexMembersComponent} from '../views/pages/members/index-members/index-members.component';
import {CreateMembersComponent} from '../views/pages/members/create-members/create-members.component';
import {ShowMemebersComponent} from '../views/pages/members/show-memebers/show-memebers.component';
import {IndexProductsComponent} from '../views/pages/products/index-products/index-products.component';
import {CreateProductsComponent} from '../views/pages/products/create-products/create-products.component';
import {ShowProductsComponent} from '../views/pages/products/show-products/show-products.component';
import {ShowPostsComponent} from '../views/pages/posts/show-posts/show-posts.component';
import {CreatePostsComponent} from '../views/pages/posts/create-posts/create-posts.component';
import {IndexPostsComponent} from '../views/pages/posts/index-posts/index-posts.component';
import {IndexOrderComponent} from '../views/pages/orders/index-order/index-order.component';
import {ShowOrderComponent} from '../views/pages/orders/show-order/show-order.component';

const routes: Routes = [
  // Auth pages
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: '', component: LoginComponent, pathMatch: 'full'}
    ]
  },
  // Admin pages
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: BlankComponent, pathMatch: 'full'},
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'members',
        component: IndexMembersComponent
      },
      {
        path: 'members/create',
        component: CreateMembersComponent
      },
      {
        path: 'members/show/:memberId',
        component: ShowMemebersComponent
      },
      {
        path: 'products',
        component: IndexProductsComponent
      },
      {
        path: 'products/create',
        component: CreateProductsComponent
      },
      {
        path: 'products/show/:productId',
        component: ShowProductsComponent
      },
      {
        path: 'posts',
        component: IndexPostsComponent
      },
      {
        path: 'posts/create',
        component: CreatePostsComponent
      },
      {
        path: 'posts/show/:postId',
        component: ShowPostsComponent
      },
      {
        path: 'orders',
        component: IndexOrderComponent
      },
      {
        path: 'orders/show/:orderId',
        component: ShowOrderComponent
      }
    ]
  },
  // Otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
