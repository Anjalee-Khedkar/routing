import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FairsDashboardComponent } from './shared/components/fairs-dashboard/fairs-dashboard.component';
import { HomeComponent } from './shared/components/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ProductsDashbordComponent } from './shared/components/products-dashbord/products-dashbord.component';
import { UsersComponent } from './shared/components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UsersComponent,
    ProductsDashbordComponent,
    FairsDashboardComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
