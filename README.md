
About
=================

Ng Backend Mocker, is a lightweight api mocker for local test and development of angular applications. 
It adds an HttpInterceptor tou your HttpClient interceptors, then it kinda hijacks the http call and responds it with appropriate Response.


Features
-------------

 * It Helps for UI testing and development without being obligated to have a test-backend server or a separated mocker for backend.
 * It can be enabled or disabled with environment object.
 * It will catch requests based on the request path and method.
 

How to get
--------------


```bash

    npm i ng-backend-mocker

```



How to use
-------------


For this to work, you should:

1. install the npm package.
2. import the NgxBackendMockerModule, at your appModule.
3. call NgxBackendMockerModule.forRoot() method passing an object which contains a boolean property named __mockBackend__.
4. implement the interface ```IBackendMockDataProvider``` and return an array of ```ResponseCheckpoint```s.
5. in your appModule, provide your implementation so it can be injected in as ```IBackendMockDataProvider```. 


__Notes:__



 * A ```IBackendMockDataProvider```, is an interface with one method, which returns an array of 
    ```ResponseCheckpoint```. This is the way you tell the library which urls must be hijacked and how it should respond to them.
 * A ```ResponseCheckpoint```, is a data object, which keeps information like request-path, request-method, response-body ant etc.
 * The object being passed to NgxBackendMockerModule.forRoot() method, can be any object. If this object is not null and it contains a boolean property named __mockBackend__ with the value 'True', it will enable the library. You can use your Environment object, to use this only with certain environments. 
 * Skipping the call to ```NgBackendMocker.forRoot({mockBackend:true})```, will not cause any problems or errors, but the library would consider that as a production setup and will not intercept requests. 
 * When mocking is disabled by settings the ```mockBackend``` to false, or omitting the ```NgBackendMocker.forRoot({mockBackend:true})``` call, and also when mocking is enabled but a request 
 is not registered with available ```ResponseCheckpoint``` objects in ```IBackendMockDataProvider```, the library will pass down the request/response through the pipeline and it will eventually make a real request to the real endpoint.

__AppModule__


```typescript

    @NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        // Importing the NgxBackendMockerModule
        // passing the 'environment' object to the library.
        NgxBackendMockerModule.forRoot(environment)
    ],
    providers: [
        {
        // Providing an implementation for IBackendMockDataProvider
        provide:'IBackendMockDataProvider',
        useClass:BackendMockData
        }
    ],
    bootstrap: [AppComponent]
    })
    export class AppModule { }

```

__Implementation of IBackendMockDataProvider__



```typescript

    @Injectable()
    export class BackendMockData implements IBackendMockDataProvider{

        getAllInteractions(): ResponseCheckPoint[] {
            
            return [
                new ResponseCheckPoint()
                .withPath('/public/v2/posts')
                .withBody({ foo: 'bar' })
                .withHeader('content-type', 'application/json')
                .selectByPathAndMethod()
            ];
        }

    }

```

__Environment.dev.ts__



```typescript

    export const environment = {
        production: false,
        mockBackend:true
    };

```


Thanks
========

I hope it save's you some time. good luck.



Mani
(acidmanic.moayedi@gmail.com)
