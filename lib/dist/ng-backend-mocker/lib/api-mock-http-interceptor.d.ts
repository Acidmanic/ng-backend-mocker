import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { IBackendMockDataProvider } from "./ibackend-mockdata-provider";
import * as ɵngcc0 from '@angular/core';
export declare class ApiMockHttpInterceptor implements HttpInterceptor {
    private backend;
    private environment;
    constructor(backend: IBackendMockDataProvider, environment: any);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    private noMock;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ApiMockHttpInterceptor, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ApiMockHttpInterceptor>;
}

//# sourceMappingURL=api-mock-http-interceptor.d.ts.map