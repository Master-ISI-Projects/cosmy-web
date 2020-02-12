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
    ShowMemebersComponent
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
    MembersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
