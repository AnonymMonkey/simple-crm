import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyDqQcF4kd_7wVXTAqdU5Z-t4dUjWVyNg3I',
        authDomain: 'simple-crm-7cb35.firebaseapp.com',
        databaseURL:
          'https://simple-crm-7cb35-default-rtdb.europe-west1.firebasedatabase.app',
        projectId: 'simple-crm-7cb35',
        storageBucket: 'simple-crm-7cb35.appspot.com',
        messagingSenderId: '607297551023',
        appId: '1:607297551023:web:ea52b39d51426b8eb0b25a',
      })
    ),
    provideDatabase(() => getDatabase()),
  ],
};
