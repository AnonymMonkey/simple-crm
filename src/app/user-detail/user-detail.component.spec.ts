import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailComponent } from './user-detail.component';
import { RouterModule } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { appConfig } from '../app.config';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetailComponent, RouterModule.forRoot([])],
      providers: [
        ...appConfig.providers,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
