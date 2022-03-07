import { HttpHeaders, HttpRequest } from "@angular/common/http";
export declare class ResponseCheckPoint {
    method: string;
    path: string;
    responseBody: any;
    responseCode: number;
    responseHeaders: HttpHeaders;
    requestSelector: (HttpRequest: any, ResponseCheckPoint: any) => boolean;
    constructor();
    withMethod(method: string): ResponseCheckPoint;
    withPath(path: string): ResponseCheckPoint;
    withBody(body: any): ResponseCheckPoint;
    withCode(code: number): ResponseCheckPoint;
    withHeader(key: string, value: string): ResponseCheckPoint;
    withSelector(selector: (HttpRequest: any, ResponseCheckPoint: any) => boolean): ResponseCheckPoint;
    selectByPathOnly(): ResponseCheckPoint;
    selectByPathAndMethod(): ResponseCheckPoint;
    selectAll(): ResponseCheckPoint;
    accepts(req: HttpRequest<any>): boolean;
}
