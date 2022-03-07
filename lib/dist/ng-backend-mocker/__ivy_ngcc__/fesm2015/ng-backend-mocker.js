import { HttpResponse, HTTP_INTERCEPTORS, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject, NgModule } from '@angular/core';
import { Subject } from 'rxjs';

import * as ɵngcc0 from '@angular/core';
class ApiMockHttpInterceptor {
    constructor(backend, environment) {
        this.backend = backend;
        this.environment = environment;
        console.log('Environment: ', environment);
    }
    intercept(req, next) {
        if (this.noMock()) {
            return next.handle(req);
        }
        const interactions = this.backend.getAllInteractions();
        for (const key in interactions) {
            const int = interactions[key];
            if (int.accepts(req)) {
                var handler = new Subject();
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
    noMock() {
        const envAny = this.environment;
        if (envAny === null || envAny === void 0 ? void 0 : envAny.mockBackend) {
            return false;
        }
        return true;
    }
}
ApiMockHttpInterceptor.ɵfac = function ApiMockHttpInterceptor_Factory(t) { return new (t || ApiMockHttpInterceptor)(ɵngcc0.ɵɵinject('IBackendMockDataProvider'), ɵngcc0.ɵɵinject('env')); };
ApiMockHttpInterceptor.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: ApiMockHttpInterceptor, factory: ApiMockHttpInterceptor.ɵfac });
ApiMockHttpInterceptor.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['IBackendMockDataProvider',] }] },
    { type: undefined, decorators: [{ type: Inject, args: ['env',] }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ApiMockHttpInterceptor, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ['IBackendMockDataProvider']
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: ['env']
            }] }]; }, null); })();

class NgBackendMockerModule {
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
NgBackendMockerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NgBackendMockerModule });
NgBackendMockerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NgBackendMockerModule_Factory(t) { return new (t || NgBackendMockerModule)(); }, providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ApiMockHttpInterceptor,
            multi: true
        }
    ], imports: [[]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgBackendMockerModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

class ResponseCheckPoint {
    constructor() {
        this.method = 'GET';
        this.path = '';
        this.responseCode = 200;
        this.responseHeaders = new HttpHeaders();
        this.method = 'GET';
        this.path = '';
        this.responseBody = null;
        this.responseCode = 200;
        this.responseHeaders = new HttpHeaders();
        this.requestSelector = (req, rcp) => true;
    }
    withMethod(method) {
        this.method = method;
        return this;
    }
    withPath(path) {
        this.path = path;
        return this;
    }
    withBody(body) {
        this.responseBody = body;
        return this;
    }
    withCode(code) {
        this.responseCode = code;
        return this;
    }
    withHeader(key, value) {
        this.responseHeaders.append(key, value);
        return this;
    }
    withSelector(selector) {
        this.requestSelector = selector;
        return this;
    }
    selectByPathOnly() {
        this.requestSelector = (req, rcp) => req.url == rcp.path;
        return this;
    }
    selectByPathAndMethod() {
        this.requestSelector = (req, rcp) => req.url == rcp.path && req.method.toLowerCase() == rcp.method.toLowerCase();
        return this;
    }
    selectAll() {
        this.requestSelector = (req, rcp) => true;
        return this;
    }
    accepts(req) {
        return this.requestSelector(req, this);
    }
}

/*
 * Public API Surface of ng-backend-mocker
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgBackendMockerModule, ResponseCheckPoint, ApiMockHttpInterceptor as ɵa };

//# sourceMappingURL=ng-backend-mocker.js.map