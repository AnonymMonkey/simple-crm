import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { DialogEditUserComponent } from './dialog-edit-user.component';
import { FirebaseAppModule } from '@angular/fire/app';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { appConfig } from '../app.config';

describe('DialogEditUserComponent', () => {
  let component: DialogEditUserComponent;
  let fixture: ComponentFixture<DialogEditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEditUserComponent, FirebaseAppModule],
      providers: [
        ...appConfig.providers,
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            user$: of({
              firstName: 'Test First Name',
              lastName: 'Test Last Name',
              email: 'Test email',
              birthDate: '540693870937',
            }),
            userID: 'testUserID',
          },
        },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
