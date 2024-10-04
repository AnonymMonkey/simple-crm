import { Component, Inject, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
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
import { User } from '../../models/user.class';
import { collection, doc, setDoc, updateDoc } from 'firebase/firestore';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dialog-edit-user',
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
  providers: [provideNativeDateAdapter()],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss',
})
export class DialogEditUserComponent {
  readonly dialogRef = inject(MatDialogRef<DialogEditUserComponent>);
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

  formatDate(birthDate: any): Date {
    return birthDate instanceof Date ? birthDate : new Date(birthDate);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  async editUserData() {
    this.loading = true;

    try {
      debugger;
      const userDocRef = doc(this.firestore, `users/${this.userID}`);

      await updateDoc(userDocRef, {
        firstName: this.userData.firstName,
        lastName: this.userData.lastName,
        email: this.userData.email,
        birthDate: new Date(this.userData.birthDate).getTime(),
      });

      this.closeDialog();
    } catch (error) {
      console.error('Error updating user:', error);
    } finally {
      this.loading = false;
    }
  }
}
