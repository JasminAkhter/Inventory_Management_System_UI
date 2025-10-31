import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UniteOfMeasurementService } from '../../services/unite-of-measurement.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Uom } from '../../models/uom';
import { DeleteConfirmComponent, DeleteDialogData } from '../delete-confirm/delete-confirm.component';
import { UomDialogComponent } from '../uom-dialog/uom-dialog.component';

@Component({
  selector: 'app-unite-of-measurement',
  templateUrl: './unite-of-measurement.component.html',
  styleUrl: './unite-of-measurement.component.css'
})
export class UniteOfMeasurementComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private uomService: UniteOfMeasurementService,
    private snackBar: MatSnackBar,
  ) {

  }

  uoms: Uom[] = [];

  displayedColumns: string[] = [
    'uomID',
    'uomName',
    'description',
    'actions'
  ];

  uom: Uom = {
    uomID: '',
    uomName: '',
    description: ''
  };


  ngOnInit(): void {
    this.loadUoms();
  }

  loadUoms(): void {
    this.uomService.getAll().subscribe({
      next: (data: Uom[]) => {
        this.uoms = data;
        console.log('Uoms loaded:', this.uoms);
      },
      error: (err: any) => {
        console.error('Error loading uoms:', err);
        this.snackBar.open('Failed to load uoms', 'Close', {
          duration: 3000,
          panelClass: ['snackbar-error']
        });
      }
    });
  }


  editUom(uom: Uom) {
    if (!uom.uomID) {
      this.snackBar.open('Invalid uom ID', 'Close', { duration: 3000 });
      return;
    }

    this.uomService.getById(uom.uomID).subscribe({
      next: (data) => {
        const dialogRef = this.dialog.open(UomDialogComponent, {
          width: '400px',
          data: data
        });

        dialogRef.afterClosed().subscribe(result => {
          if (result === 'saved') {
            this.loadUoms();
          }
        });
      },
      error: (err) => console.error(err)
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(UomDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'saved') {
        this.loadUoms();
      }
    });
  }

  deleteUom(uom: any) {
    if (!uom?.uomID) return;

    // Prepare data for the universal delete dialog
    const dialogData: DeleteDialogData = {
      title: 'Delete Uom',
      message: 'Are you sure you want to delete this uom?',
      name: uom.uomName
    };

    // Open the dialog
    const dialogRef = this.dialog.open(DeleteConfirmComponent, {
      width: '400px',
      data: dialogData
    });

    // Execute deletion only if user confirms
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.uomService.delete(uom.uomID).subscribe({
          next: () => {
            this.snackBar.open('Uom deleted successfully!', 'Close', { duration: 2000 });
            this.loadUoms(); // refresh the list
          },
          error: (err) => {
            console.error('Error deleting uom:', err);
            this.snackBar.open('Failed to delete uom', 'Close', { duration: 3000 });
          }
        });
      }
    });
  }


}
