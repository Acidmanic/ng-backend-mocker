import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { IBackendMockDataProvider } from "./ibackend-mockdata-provider";


@Injectable()
export class ApiMockHttpInterceptor implements HttpInterceptor {


    constructor(
        @Inject('IBackendMockDataProvider') private backend: IBackendMockDataProvider,
        @Inject('env') private environment
    ) {
        console.log('Environment: ',environment);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


        if (this.noMock()) {

            return next.handle(req);
        }

        const interactions = this.backend.getAllInteractions();

        for (const key in interactions) {

            const int = interactions[key];

            if (int.path == req.url && int.method == req.method) {

                var handler = new Subject<HttpEvent<any>>();

                console.info("Found a response interaction.");

                var response = new HttpResponse({
                    body: int.responseBody,
                    headers: int.responseHeaders,
                    status: int.responseCode,
                    url: req.url
                });

                setTimeout(() => {
                    handler.next(response);
                    handler.complete();
                }, 100);

                return handler;
            }
        }

        console.log('redirected to real path');
        
        return next.handle(req);
    }



    private noMock(): boolean {

        const envAny: any = this.environment;

        if (envAny?.mockBackend) {

            return false;
        }
        return true;
    }
}