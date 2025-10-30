import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.css']
})
export class CategoryDialogComponent {
  category: Category;

  constructor(
    private dialogRef: MatDialogRef<CategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Category,  
    private categoryService: CategoryService,
    private snackBar: MatSnackBar
  ) 
  {
    
    this.category = data ? { ...data } : {
      categoryID: '',
      categoryName: '',
      description: '',
      vat: 0,
      createBy: '',
      createDate: undefined,
      updateBy: '',
      updateDate: undefined
    };
  }

  save() {
    if (this.category.categoryID) {
      
      this.categoryService.update(this.category.categoryID, this.category).subscribe({
        next: () => {
          this.snackBar.open('Category updated!', 'Close', { duration: 2000 });
          this.dialogRef.close('saved');
        },
        error: err => console.error(err)
      });
    } else {
     
      this.categoryService.create(this.category).subscribe({
        next: () => {
          this.snackBar.open('Category added!', 'Close', { duration: 2000 });
          this.dialogRef.close('saved');
        },
        error: err => console.error(err)
      });
    }
  }

  close() {
    this.dialogRef.close();
  }
}
