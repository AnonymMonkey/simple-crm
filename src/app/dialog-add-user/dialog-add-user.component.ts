import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';
import { getDatabase, ref, set } from '@angular/fire/database';
import { Database } from 'firebase/database';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [
    FormsModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
})
export class DialogAddUserComponent {
  readonly dialogRef = inject(MatDialogRef<DialogAddUserComponent>);
  database: Database = getDatabase();

  user: User = new User();
  birthDate: Date | undefined;

  onNoClick(): void {
    this.dialogRef.close();
  }

  async saveUser() {
    this.user.birthDate = this.birthDate?.getTime();
    console.log('user is', this.user);

    try {
      const userRef = ref(
        this.database,
        'users/' +
          this.user.lastName?.toLowerCase() +
          '_' +
          this.user.firstName?.toLowerCase()
      );
      await set(userRef, this.user.toJSON());
    } catch (error) {
      console.error('Error adding user:', error);
    }
  }
}
