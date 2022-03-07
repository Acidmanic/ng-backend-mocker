import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ApiMockHttpInterceptor } from './api-mock-http-interceptor';
import { ResponseCheckPoint } from './response-checkpoint';
import { IBackendMockDataProvider } from './ibackend-mockdata-provider'



@NgModule({
  declarations: [  ],
  imports: [
  ],
  exports: [
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiMockHttpInterceptor,
      multi: true
    }
  ]
})
export class NgBackendMockerModule {

  public static forRoot(environment?: any): ModuleWithProviders<any> {

    return {
      ngModule: NgBackendMockerModule,
      providers: [
        {
          provide: 'env',
          useValue: environment
        }
      ]
    };
  }
}
