import { CategoryService } from './../../category.service';
import { Component } from '@angular/core';
import { ProductService } from '../../product.service';
import { IProduct } from '../../interfaces/product';
import { FormControl, FormGroup } from '@angular/forms';
import { ICategory } from '../../interfaces/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  router = new Router();
  products: IProduct[] = [];
  categories: ICategory[] = [];
  searchForm = new FormGroup({
    keyword: new FormControl(''),
  });
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}
  async ngOnInit() {
    this.categoryService.Get_All_Category().subscribe((data) => {
      this.categories = data;
    });
  }
  onSubmit = async () => {
    try {
      const query = this.searchForm.controls.keyword.value;
      this.router.navigate(['/search'], { queryParams: { keyword: query } });
    } catch (error) {}
  };
}
