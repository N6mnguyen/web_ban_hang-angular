import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './layout/admin/admin.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClientComponent } from './layout/client/client.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { DetailComponent } from './pages/product/detail/detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    FooterComponent,
    ClientComponent,
    HomeComponent,
    ProductComponent,
    DetailComponent,
    CartComponent,
    SidenavComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductEditComponent,
    CategoryAddComponent,
    SigninComponent,
    SignupComponent,
    SearchComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
