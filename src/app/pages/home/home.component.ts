import { Component } from '@angular/core';
import { ProductService } from '../../product.service';
import { IProduct } from '../../interfaces/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  products: IProduct[] = [];
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.productService.Get_All_Product().subscribe((data) => {
      this.products = data;
    });
  }
}
