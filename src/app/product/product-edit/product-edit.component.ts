import { CategoryService } from './../../category.service';
import { Component, inject } from '@angular/core';
import { IProduct } from '../../interfaces/product';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../product.service';
import { ICategory } from '../../interfaces/category';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css',
})
export class ProductEditComponent {
  Route = inject(ActivatedRoute);

  product: IProduct[] = [];
  categories: ICategory[] = [];
  productId = this.Route.snapshot.params['id'];

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
    this.productService.Get_Product_By_Id(this.productId).subscribe((data) => {
      console.log(data);
      this.productForm.controls.name.setValue(data.name);
      this.productForm.controls.categoryId.setValue(data.categoryId);
      this.productForm.controls.price.setValue(data.price);
      this.productForm.controls.image.setValue(data.image);
      this.productForm.controls.description.setValue(data.description);
    });
  }
  onSubmit = async () => {
    try {
      const productData = this.productForm.value as IProduct;

      this.productService
        .Update_Product(this.productId, productData)
        .subscribe((data) => {
          alert('Thêm mới thành công !');
          this.product.push = data;
          window.location.href = '/admin';
        });
    } catch (error) {}
  };
}
