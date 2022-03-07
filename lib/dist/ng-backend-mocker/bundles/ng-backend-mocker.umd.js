(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('@angular/core'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('ng-backend-mocker', ['exports', '@angular/common/http', '@angular/core', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["ng-backend-mocker"] = {}, global.ng.common.http, global.ng.core, global.rxjs));
})(this, (function (exports, http, core, rxjs) { 'use strict';

    var ApiMockHttpInterceptor = /** @class */ (function () {
        function ApiMockHttpInterceptor(backend, environment) {
            this.backend = backend;
            this.environment = environment;
            console.log('Environment: ', environment);
        }
        ApiMockHttpInterceptor.prototype.intercept = function (req, next) {
            if (this.noMock()) {
                return next.handle(req);
            }
            var interactions = this.backend.getAllInteractions();
            for (var key in interactions) {
                var int = interactions[key];
                if (int.accepts(req)) {
                    var handler = new rxjs.Subject();
                    console.info("Found a response interaction.");
                    var response = new http.HttpResponse({
                        body: int.responseBody,
                        headers: int.responseHeaders,
                        status: int.responseCode,
                        url: req.url
                    });
                    setTimeout(function () {
                        handler.next(response);
                        handler.complete();
                    }, 100);
                    return handler;
                }
            }
            console.log('redirected to real path');
            return next.handle(req);
        };
        ApiMockHttpInterceptor.prototype.noMock = function () {
            var envAny = this.environment;
            if (envAny === null || envAny === void 0 ? void 0 : envAny.mockBackend) {
                return false;
            }
            return true;
        };
        return ApiMockHttpInterceptor;
    }());
    ApiMockHttpInterceptor.decorators = [
        { type: core.Injectable }
    ];
    ApiMockHttpInterceptor.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: ['IBackendMockDataProvider',] }] },
        { type: undefined, decorators: [{ type: core.Inject, args: ['env',] }] }
    ]; };

    var NgBackendMockerModule = /** @class */ (function () {
        function NgBackendMockerModule() {
        }
        NgBackendMockerModule.forRoot = function (environment) {
            return {
                ngModule: NgBackendMockerModule,
                providers: [
                    {
                        provide: 'env',
                        useValue: environment
                    }
                ]
            };
        };
        return NgBackendMockerModule;
    }());
    NgBackendMockerModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [],
                    imports: [],
                    exports: [],
                    providers: [
                        {
                            provide: http.HTTP_INTERCEPTORS,
                            useClass: ApiMockHttpInterceptor,
                            multi: true
                        }
                    ]
                },] }
    ];

    var ResponseCheckPoint = /** @class */ (function () {
        function ResponseCheckPoint() {
            this.method = 'GET';
            this.path = '';
            this.responseCode = 200;
            this.responseHeaders = new http.HttpHeaders();
            this.method = 'GET';
            this.path = '';
            this.responseBody = null;
            this.responseCode = 200;
            this.responseHeaders = new http.HttpHeaders();
            this.requestSelector = function (req, rcp) { return true; };
        }
        ResponseCheckPoint.prototype.withMethod = function (method) {
            this.method = method;
            return this;
        };
        ResponseCheckPoint.prototype.withPath = function (path) {
            this.path = path;
            return this;
        };
        ResponseCheckPoint.prototype.withBody = function (body) {
            this.responseBody = body;
            return this;
        };
        ResponseCheckPoint.prototype.withCode = function (code) {
            this.responseCode = code;
            return this;
        };
        ResponseCheckPoint.prototype.withHeader = function (key, value) {
            this.responseHeaders.append(key, value);
            return this;
        };
        ResponseCheckPoint.prototype.withSelector = function (selector) {
            this.requestSelector = selector;
            return this;
        };
        ResponseCheckPoint.prototype.selectByPathOnly = function () {
            this.requestSelector = function (req, rcp) { return req.url == rcp.path; };
            return this;
        };
        ResponseCheckPoint.prototype.selectByPathAndMethod = function () {
            this.requestSelector = function (req, rcp) { return req.url == rcp.path && req.method.toLowerCase() == rcp.method.toLowerCase(); };
            return this;
        };
        ResponseCheckPoint.prototype.selectAll = function () {
            this.requestSelector = function (req, rcp) { return true; };
            return this;
        };
        ResponseCheckPoint.prototype.accepts = function (req) {
            return this.requestSelector(req, this);
        };
        return ResponseCheckPoint;
    }());

    /*
     * Public API Surface of ng-backend-mocker
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NgBackendMockerModule = NgBackendMockerModule;
    exports.ResponseCheckPoint = ResponseCheckPoint;
    exports["ɵa"] = ApiMockHttpInterceptor;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ng-backend-mocker.umd.js.map
