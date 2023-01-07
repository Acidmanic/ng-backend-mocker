import { Injectable } from '@angular/core';
import {
  IBackendMockDataProvider,
  ResponseCheckPoint,
} from 'ng-backend-mocker';

@Injectable()
export class BackendMockData implements IBackendMockDataProvider {
  getAllInteractions(): ResponseCheckPoint[] {
    return [
      new ResponseCheckPoint()
        .withPath('https://gorest.co.in/public/v2/posts')
        .withBody([{ title: 'mock-foo', body: 'mock-bar' }])
        .withHeader('content-type', 'application/json')
        .selectByPathAndMethod(),
    ];
  }
}
