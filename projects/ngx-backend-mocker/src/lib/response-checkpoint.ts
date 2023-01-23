import { HttpHeaders, HttpRequest } from '@angular/common/http';

export class ResponseCheckPoint {
  public method: string = 'GET';

  public path: string = '';

  public responseBody: any;

  public responseCode: number = 200;

  public responseHeaders: HttpHeaders = new HttpHeaders();

  public requestSelector: (HttpRequest, ResponseCheckPoint) => boolean =
      (req: HttpRequest<any>, rcp: ResponseCheckPoint) => true;

  constructor() {
    this.method = 'GET';
    this.path = '';
    this.responseBody = null;
    this.responseCode = 200;
    this.responseHeaders = new HttpHeaders();
    this.selectByPathAndMethod();
  }

  public withMethod(method: string): ResponseCheckPoint {
    this.method = method;
    return this;
  }

  public withPath(path: string): ResponseCheckPoint {
    this.path = path;
    return this;
  }

  public withBody(body: any): ResponseCheckPoint {
    this.responseBody = body;
    return this;
  }

  public withCode(code: number): ResponseCheckPoint {
    this.responseCode = code;
    return this;
  }

  public withHeader(key: string, value: string): ResponseCheckPoint {
    this.responseHeaders.append(key, value);
    return this;
  }

  public withSelector(
    selector: (HttpRequest, ResponseCheckPoint) => boolean
  ): ResponseCheckPoint {
    this.requestSelector = selector;
    return this;
  }

  public selectByPathOnly(): ResponseCheckPoint {
    this.requestSelector = (req: HttpRequest<any>, rcp: ResponseCheckPoint) =>
      req.url == rcp.path;
    return this;
  }

  public selectByPathAndMethod(): ResponseCheckPoint {
    this.requestSelector = (req: HttpRequest<any>, rcp: ResponseCheckPoint) =>
      req.url == rcp.path &&
      req.method.toLowerCase() == rcp.method.toLowerCase();
    return this;
  }

  public selectAll(): ResponseCheckPoint {
    this.requestSelector = (req: HttpRequest<any>, rcp: ResponseCheckPoint) =>
      true;
    return this;
  }

  public accepts(req: HttpRequest<any>): boolean {
    return this.requestSelector(req, this);
  }
}
