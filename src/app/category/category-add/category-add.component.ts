import { Component } from '@angular/core';
import { ICategory } from '../../interfaces/category';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrl: './category-add.component.css',
})
export class CategoryAddComponent {
  category: ICategory[] = [];
  constructor(private categoryService: CategoryService) {}
  categoryForm = new FormGroup({
    name: new FormControl('', Validators.required),
  });
  onSubmit = async () => {
    {
      try {
        const categoryData = this.categoryForm.value as ICategory;
        this.categoryService.Add_Category(categoryData).subscribe((data) => {
          alert('Thêm mới thành công !');
          this.category.push(data);
        });
      } catch (error) {}
    }
  };
}
