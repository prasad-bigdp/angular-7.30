import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';
import { AdminModule } from './admin/admin.module';
import { FooterComponent } from './footer/footer.component';
import { FakeProductsService } from './fake-products.service';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    ProductComponent,
    FooterComponent,
    CartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, AdminModule, HttpClientModule],
  providers: [FakeProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
