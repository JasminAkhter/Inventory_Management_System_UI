import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';
import { MatDialog } from '@angular/material/dialog';
import { CategoryDialogComponent } from '../category-dialog/category-dialog.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];

  categoryData: Category = {
    categoryID: '',
    categoryName: '',
    description: '',
    vat: 0,
    createBy: '',
    createDate: undefined,
    updateBy: '',
    updateDate: undefined
  };

  displayedColumns: string[] = [
    'categoryID',
    'categoryName',
    'description',
    'vat',
    'createBy',
    'createDate',
    'updateBy',
    'updateDate',
    'actions'
  ];


  constructor(
    private dialog: MatDialog,
    private categoryService: CategoryService,
    private snackBar: MatSnackBar
  ) { }


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

  openDialog(): void {
    const dialogRef = this.dialog.open(CategoryDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'saved') {
        this.loadCategories();
      }
    });
  }

  editCategory(category: Category) {
    const dialogRef = this.dialog.open(CategoryDialogComponent, {
      width: '400px',
      data: category
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'saved') {
        this.loadCategories();
      }
    });
  }

  deleteCategory(id: string) {
    if (!id) return;

    if (confirm('Are you sure you want to delete this category?')) {
      this.categoryService.delete(id).subscribe({
        next: () => {
          this.snackBar.open('Category deleted successfully!', 'Close', {
            duration: 2000
          });
          this.loadCategories(); 
        },
        error: (err) => {
          console.error('Error deleting category:', err);
          this.snackBar.open('Failed to delete category', 'Close', {
            duration: 3000
          });
        }
      });
    }
  }



}






