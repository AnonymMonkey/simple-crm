import { CommonModule } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { doc, updateDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialog-edit-adress',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatProgressBarModule,
  ],
  templateUrl: './dialog-edit-adress.component.html',
  styleUrl: './dialog-edit-adress.component.scss',
})
export class DialogEditAdressComponent {
  readonly dialogRef = inject(MatDialogRef<DialogEditAdressComponent>);
  firestore: Firestore = inject(Firestore);

  loading = false;

  user$: Observable<any>;
  userData: any = {};
  userID: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.user$ = data.user$;
    this.userID = data.userID;

    this.user$.subscribe((user) => {
      this.userData = { ...user };
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  async editAdressData() {
    this.loading = true;

    try {
      debugger;
      const userDocRef = doc(this.firestore, `users/${this.userID}`);

      await updateDoc(userDocRef, {
        street: this.userData.street,
        zipCode: this.userData.zipCode,
        city: this.userData.city,
      });

      this.closeDialog();
    } catch (error) {
      console.error('Error updating user:', error);
    } finally {
      this.loading = false;
    }
  }
}
