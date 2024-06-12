import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../product.service';
import { IProduct } from '../../../interfaces/product';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailComponent {
  product: IProduct = {} as IProduct;
  router = inject(ActivatedRoute);
  id = this.router.snapshot.params['id'];
  constructor(private productService: ProductService) {}
  async ngOnInit() {
    this.productService.Get_Product_By_Id(this.id).subscribe((data) => {
      console.log(data);
      this.product = data;
    });
  }
}
