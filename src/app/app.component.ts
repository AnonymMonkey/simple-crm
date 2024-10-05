import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Firestore, FirestoreModule } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FirestoreModule,
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatTooltipModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  firestore: Firestore = inject(Firestore);

  constructor() {}
}
