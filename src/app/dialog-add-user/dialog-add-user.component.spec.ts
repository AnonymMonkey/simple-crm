import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddUserComponent } from './dialog-add-user.component';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { FirebaseAppModule } from '@angular/fire/app';
import { RouterModule } from '@angular/router';
import { appConfig } from '../app.config';

describe('DialogAddUserComponent', () => {
  let component: DialogAddUserComponent;
  let fixture: ComponentFixture<DialogAddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DialogAddUserComponent,
        MatDialogModule,
        FirebaseAppModule,
        RouterModule.forRoot([]),
      ],
      providers: [
        ...appConfig.providers,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
