import { Component, Inject } from '@angular/core';
import { Uom } from '../../models/uom';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UniteOfMeasurementService } from '../../services/unite-of-measurement.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-uom-dialog',
  templateUrl: './uom-dialog.component.html',
  styleUrl: './uom-dialog.component.css'
})
export class UomDialogComponent {
  uom: Uom;

  constructor(
    private dialogRef: MatDialogRef<UomDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Uom,
    private uomService: UniteOfMeasurementService,
    private snackBar: MatSnackBar
  ) {

    this.uom = data ? { ...data } : {
      uomID: '',
      uomName: '',
      description: ''
    };
  }

  save() {
    if (this.uom.uomID) {

      this.uomService.update(this.uom.uomID, this.uom).subscribe({
        next: () => {
          this.snackBar.open('Uom updated!', 'Close', { duration: 2000 });
          this.dialogRef.close('saved');
        },
        error: err => console.error(err)
      });
    } else {

      this.uomService.create(this.uom).subscribe({
        next: () => {
          this.snackBar.open('Uom added!', 'Close', { duration: 2000 });
          this.dialogRef.close('saved');
        },
        error: err => console.error(err)
      });
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
