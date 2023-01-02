import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BackendMockData } from './backend-mock-data';
import { NgBackendMockerModule } from 'ng-backend-mocker';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    // Importing the NgBackendMockerModule
    // passing the 'environment' object to the library.
    NgBackendMockerModule,
  ],
  providers: [
    {
      // Providing an implementation for IBackendMockDataProvider
      provide: 'IBackendMockDataProvider',
      useClass: BackendMockData,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
