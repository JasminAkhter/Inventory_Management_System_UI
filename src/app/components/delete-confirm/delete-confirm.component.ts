import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DeleteDialogData {
  title?: string;      // optional title
  message?: string;    // optional custom message
  name?: string;       // name of the item to display
}

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrl: './delete-confirm.component.css'
})
export class DeleteConfirmComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeleteDialogData
  ) {}

  cancel(): void {
    this.dialogRef.close(false);
  }

  confirm(): void {
    this.dialogRef.close(true);
  }

}
