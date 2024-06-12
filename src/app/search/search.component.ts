import { IProduct } from './../interfaces/product';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  products: IProduct[] = [];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}
  ngOnInit() {
    const keywords = this.route.snapshot.queryParams['keyword'];
    this.productService.Search_Product(keywords).subscribe((data) => {
      console.log(data);
      this.products = data;
    });
  }
}
