import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './views/components/navbar/navbar.component';
import { SidebarComponent } from './views/components/sidebar/sidebar.component';
import { FooterComponent } from './views/components/footer/footer.component';
import { MainComponent } from './views/layouts/main/main.component';
import { BlankComponent } from './views/pages/blank/blank.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    MainComponent,
    BlankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
