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
  user: Observable<any>;
  firestore: Firestore = inject(Firestore);

  bankName: string = '';

  constructor(private route: ActivatedRoute) {
    this.bankName = this.route.snapshot.params['id'];

    const userDoc = doc(this.firestore, 'users/' + this.bankName);
    this.user = docData(userDoc, { idField: 'id' });
    console.log(this.user);
  }

  editUser() {}

  editUserAdress() {}
}
