import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { docData, Firestore } from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ActivatedRoute } from '@angular/router';
import { doc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { DialogEditAdressComponent } from '../dialog-edit-adress/dialog-edit-adress.component';
import { User } from '../../models/user.class';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent {
  user$: Observable<any>;
  firestore: Firestore = inject(Firestore);

  userID: string = '';

  constructor(private route: ActivatedRoute, public dialog: MatDialog) {
    this.userID = this.route.snapshot.params['id'];

    const userDoc = doc(this.firestore, 'users/' + this.userID);
    this.user$ = docData(userDoc, { idField: 'id' });
  }

  editUser() {
    const dialog = this.dialog.open(DialogEditUserComponent, {
      data: {
        userID: this.userID,
        user$: this.user$,
      },
    });
  }

  editUserAdress() {
    const dialog = this.dialog.open(DialogEditAdressComponent, {
      data: {
        userID: this.userID,
        user$: this.user$,
      },
    });
  }
}
