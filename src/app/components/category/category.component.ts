import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DeleteConfirmComponent, DeleteDialogData } from '../delete-confirm/delete-confirm.component';
import { CategoryDialogComponent } from '../category-dialog/category-dialog.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private categoryService: CategoryService,
    private snackBar: MatSnackBar,
  ) {

  }

  categories: Category[] = [];

  displayedColumns: string[] = [
    'categoryID',
    'categoryName',
    'description',
    'vat',
    'actions'
    // 'createBy',
    // 'createDate',
    // 'updateBy',
    // 'updateDate',
  ];

  category: Category = {
    categoryID: '',
    categoryName: '',
    description: '',
    vat: 0
  };


  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getAll().subscribe({
      next: (data: Category[]) => {
        this.categories = data;
        console.log('Categories loaded:', this.categories);
      },
      error: (err: any) => {
        console.error('Error loading categories:', err);
        this.snackBar.open('Failed to load categories', 'Close', {
          duration: 3000,
          panelClass: ['snackbar-error']
        });
      }
    });
  }


  editCategory(category: Category) {
    if (!category.categoryID) {
      this.snackBar.open('Invalid category ID', 'Close', { duration: 3000 });
      return;
    }

    this.categoryService.getById(category.categoryID).subscribe({
      next: (data) => {
        const dialogRef = this.dialog.open(CategoryDialogComponent, {
          width: '400px',
          data: data
        });

        dialogRef.afterClosed().subscribe(result => {
          if (result === 'saved') {
            this.loadCategories();
          }
        });
      },
      error: (err) => console.error(err)
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(CategoryDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'saved') {
        this.loadCategories();
      }
    });
  }


  // editCategory(category: Category) {
  //   const dialogRef = this.dialog.open(CategoryDialogComponent, {
  //     width: '400px',
  //     data: category
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result === 'saved') {
  //       this.loadCategories();
  //     }
  //   });
  // }

  deleteCategory(category: any) {
    if (!category?.categoryID) return;

    // Prepare data for the universal delete dialog
    const dialogData: DeleteDialogData = {
      title: 'Delete Category',
      message: 'Are you sure you want to delete this category?',
      name: category.categoryName
    };

    // Open the dialog
    const dialogRef = this.dialog.open(DeleteConfirmComponent, {
      width: '400px',
      data: dialogData
    });

    // Execute deletion only if user confirms
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.categoryService.delete(category.categoryID).subscribe({
          next: () => {
            this.snackBar.open('Category deleted successfully!', 'Close', { duration: 2000 });
            this.loadCategories(); // refresh the list
          },
          error: (err) => {
            console.error('Error deleting category:', err);
            this.snackBar.open('Failed to delete category', 'Close', { duration: 3000 });
          }
        });
      }
    });
  }


  // deleteCategory(id: string) {
  //   if (!id) return;

  //   if (confirm('Are you sure you want to delete this category?')) {
  //     this.categoryService.delete(id).subscribe({
  //       next: () => {
  //         this.snackBar.open('Category deleted successfully!', 'Close', {
  //           duration: 2000
  //         });
  //         this.loadCategories();
  //       },
  //       error: (err) => {
  //         console.error('Error deleting category:', err);
  //         this.snackBar.open('Failed to delete category', 'Close', {
  //           duration: 3000
  //         });
  //       }
  //     });
  //   }
  // }



}






