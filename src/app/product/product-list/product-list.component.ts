import { Component } from '@angular/core';
import { IProduct } from '../../interfaces/product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: IProduct[] = [];
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.productService.Get_All_Product().subscribe((data) => {
      this.products = data;
    });
  }
  onRemove = async (id: number) => {
    try {
      this.productService.Delete_Product(id).subscribe(() => {
        const confirm = window.confirm('Bạn có chắc chắn muốn xóa không ?');
        if (confirm) {
          alert('Xóa thành công !');
          this.products = this.products.filter((product) => product.id !== id);
        }
      });
    } catch (error) {}
  };
}
