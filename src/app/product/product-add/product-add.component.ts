import { CategoryService } from './../../category.service';
import { Component } from '@angular/core';
import { IProduct } from '../../interfaces/product';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../product.service';
import { ICategory } from '../../interfaces/category';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css',
})
export class ProductAddComponent {
  product: IProduct[] = [];
  categories: ICategory[] = [];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}
  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    categoryId: new FormControl(''),
    image: new FormControl('', Validators.required),
    price: new FormControl(0, Validators.required),
    description: new FormControl(''),
  });
  async ngOnInit() {
    this.categoryService.Get_All_Category().subscribe((data) => {
      this.categories = data;
    });
  }
  onSubmit = async () => {
    try {
      const productData = this.productForm.value as IProduct;

      this.productService.Add_Product(productData).subscribe((data) => {
        alert('Thêm mới thành công !');
        this.product.push = data;
        window.location.href = '/admin';
      });
    } catch (error) {}
  };
}
