

ng-backend-mocker
===============



This package helps to mock apis for angular components, per end-point and depending on the request.

To use the package, you will install it using npm, and add the NgBackendMockerModule, 
to your angular app. Then you will implement ```IBackendMockDataProvider``` which basically 
is just supposed to return an array of ```ResponseCheckPoint``` objects. Each __ResponseCheckPoint__ 
by defines a response for a response. 

By default, __ResponseCheckPoint__ objects will respond to requests matching their uri and http method. 
but this can be customized and you can put your own logic to determine whether to respond or not to a request by assigning a ```(HttpRequest,ResponseCheckPoint) => boolean``` method to the __requestSelector__ property of __ResponseCheckPoint__.


For more details and examples please checkout [The github page](https://github.com/Acidmanic/ng-backend-mocker)