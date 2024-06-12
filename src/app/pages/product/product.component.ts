import { Component } from '@angular/core';
import { IProduct } from '../../interfaces/product';
import { ProductService } from '../../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  products: IProduct[] = [];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}
  async ngOnInit() {
    const categoryId = this.route.snapshot.params['id'];
    this.productService
      .Get_Product_By_Category(categoryId)
      .subscribe((data) => {
        this.products = data;
      });
  }
}
