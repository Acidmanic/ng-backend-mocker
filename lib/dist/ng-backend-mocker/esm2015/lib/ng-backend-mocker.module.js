import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ApiMockHttpInterceptor } from './api-mock-http-interceptor';
export class NgBackendMockerModule {
    static forRoot(environment) {
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
NgBackendMockerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [],
                exports: [],
                providers: [
                    {
                        provide: HTTP_INTERCEPTORS,
                        useClass: ApiMockHttpInterceptor,
                        multi: true
                    }
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctYmFja2VuZC1tb2NrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctYmFja2VuZC1tb2NrZXIvc3JjL2xpYi9uZy1iYWNrZW5kLW1vY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFvQnJFLE1BQU0sT0FBTyxxQkFBcUI7SUFFekIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFnQjtRQUVwQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsUUFBUSxFQUFFLFdBQVc7aUJBQ3RCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBM0JGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsRUFBSTtnQkFDbEIsT0FBTyxFQUFFLEVBQ1I7Z0JBQ0QsT0FBTyxFQUFFLEVBQ1I7Z0JBQ0QsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFFBQVEsRUFBRSxzQkFBc0I7d0JBQ2hDLEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcGlNb2NrSHR0cEludGVyY2VwdG9yIH0gZnJvbSAnLi9hcGktbW9jay1odHRwLWludGVyY2VwdG9yJztcbmltcG9ydCB7IFJlc3BvbnNlQ2hlY2tQb2ludCB9IGZyb20gJy4vcmVzcG9uc2UtY2hlY2twb2ludCc7XG5pbXBvcnQgeyBJQmFja2VuZE1vY2tEYXRhUHJvdmlkZXIgfSBmcm9tICcuL2liYWNrZW5kLW1vY2tkYXRhLXByb3ZpZGVyJ1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbICBdLFxuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICB1c2VDbGFzczogQXBpTW9ja0h0dHBJbnRlcmNlcHRvcixcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5nQmFja2VuZE1vY2tlck1vZHVsZSB7XG5cbiAgcHVibGljIHN0YXRpYyBmb3JSb290KGVudmlyb25tZW50OiBhbnkpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPGFueT4ge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ0JhY2tlbmRNb2NrZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6ICdlbnYnLFxuICAgICAgICAgIHVzZVZhbHVlOiBlbnZpcm9ubWVudFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19