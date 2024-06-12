import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './layout/client/client.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { DetailComponent } from './pages/product/detail/detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { AdminComponent } from './layout/admin/admin.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'products', component: ProductComponent },
      { path: 'product/:id', component: DetailComponent },
      { path: 'cart', component: CartComponent },
      { path: 'sign-in', component: SigninComponent },
      { path: 'sign-up', component: SignupComponent },
      { path: 'search', component: SearchComponent },
      { path: 'category/:id', component: ProductComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component: ProductListComponent },
      { path: 'product/add', component: ProductAddComponent },
      { path: 'category/add', component: CategoryAddComponent },
      { path: 'product/edit/:id', component: ProductEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
