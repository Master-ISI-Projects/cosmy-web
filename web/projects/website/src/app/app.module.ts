import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './views/components/navbar/navbar.component';
import { FooterComponent } from './views/components/footer/footer.component';
import { TopNavbarComponent } from './views/components/top-navbar/top-navbar.component';
import { BlankComponent } from './views/pages/blank/blank.component';
import { HomeComponent } from './views/pages/home/home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProductComponent } from './views/pages/product/product.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    NavbarComponent,
    FooterComponent,
    BlankComponent,
    HomeComponent,
    ProductComponent
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
