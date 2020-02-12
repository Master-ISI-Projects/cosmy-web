import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './router/app-routing.module';
// Services & Helpers
// Shared components
import { AppComponent } from './app.component';
import { NavbarComponent } from './views/components/navbar/navbar.component';
import { SidebarComponent } from './views/components/sidebar/sidebar.component';
import { FooterComponent } from './views/components/footer/footer.component';
// Layouts
import { MainComponent } from './views/layouts/main/main.component';
// Pages
import { BlankComponent } from './views/pages/blank/blank.component';
import { AuthComponent } from './views/layouts/auth/auth.component';
import { LoginComponent } from './views/pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './views/pages/dashboard/dashboard.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {IndexMembersComponent} from './views/pages/members/index-members/index-members.component';
import {CreateMembersComponent} from './views/pages/members/create-members/create-members.component';
import {MembersService} from './services/members.service';
import {HttpClientModule} from '@angular/common/http';
import { ShowMemebersComponent } from './views/pages/members/show-memebers/show-memebers.component';
import {FormsModule} from '@angular/forms';
import { IndexProductsComponent } from './views/pages/products/index-products/index-products.component';
import { CreateProductsComponent } from './views/pages/products/create-products/create-products.component';
import { ShowProductsComponent } from './views/pages/products/show-products/show-products.component';
import { IndexPostsComponent } from './views/pages/posts/index-posts/index-posts.component';
import { CreatePostsComponent } from './views/pages/posts/create-posts/create-posts.component';
import { ShowPostsComponent } from './views/pages/posts/show-posts/show-posts.component';
import { IndexOrderComponent } from './views/orders/index-order/index-order.component';
import { ShowOrderComponent } from './views/orders/show-order/show-order.component';
import {OrderService} from './services/order.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    MainComponent,
    BlankComponent,
    AuthComponent,
    LoginComponent,
    DashboardComponent,
    // Members
    IndexMembersComponent,
    CreateMembersComponent,
    ShowMemebersComponent,
    IndexProductsComponent,
    CreateProductsComponent,
    ShowProductsComponent,
    IndexPostsComponent,
    CreatePostsComponent,
    ShowPostsComponent,
    IndexOrderComponent,
    ShowOrderComponent
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    FormsModule
  ],
  providers: [
    MembersService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
