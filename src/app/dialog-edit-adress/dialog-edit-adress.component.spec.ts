import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { DialogEditAdressComponent } from './dialog-edit-adress.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FirebaseAppModule } from '@angular/fire/app';
import { appConfig } from '../app.config';

describe('DialogEditAdressComponent', () => {
  let component: DialogEditAdressComponent;
  let fixture: ComponentFixture<DialogEditAdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEditAdressComponent, FirebaseAppModule],
      providers: [
        ...appConfig.providers,
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            user$: of({
              street: 'Test Street',
              zipCode: '12345',
              city: 'Test City',
            }),
            userID: 'testUserID',
          },
        },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogEditAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
