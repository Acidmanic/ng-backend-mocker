import { HttpResponse } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Subject } from "rxjs";
export class ApiMockHttpInterceptor {
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
ApiMockHttpInterceptor.decorators = [
    { type: Injectable }
];
ApiMockHttpInterceptor.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['IBackendMockDataProvider',] }] },
    { type: undefined, decorators: [{ type: Inject, args: ['env',] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLW1vY2staHR0cC1pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWJhY2tlbmQtbW9ja2VyL3NyYy9saWIvYXBpLW1vY2staHR0cC1pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZILE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFLM0MsTUFBTSxPQUFPLHNCQUFzQjtJQUcvQixZQUNnRCxPQUFpQyxFQUN0RCxXQUFXO1FBRFUsWUFBTyxHQUFQLE9BQU8sQ0FBMEI7UUFDdEQsZ0JBQVcsR0FBWCxXQUFXLENBQUE7UUFFbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELFNBQVMsQ0FBQyxHQUFxQixFQUFFLElBQWlCO1FBRzlDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBRWYsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzNCO1FBRUQsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBRXZELEtBQUssTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFO1lBRTVCLE1BQU0sR0FBRyxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUU5QixJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBRWxCLElBQUksT0FBTyxHQUFHLElBQUksT0FBTyxFQUFrQixDQUFDO2dCQUU1QyxPQUFPLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUM7Z0JBRTlDLElBQUksUUFBUSxHQUFHLElBQUksWUFBWSxDQUFDO29CQUM1QixJQUFJLEVBQUUsR0FBRyxDQUFDLFlBQVk7b0JBQ3RCLE9BQU8sRUFBRSxHQUFHLENBQUMsZUFBZTtvQkFDNUIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxZQUFZO29CQUN4QixHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUc7aUJBQ2YsQ0FBQyxDQUFDO2dCQUVILFVBQVUsQ0FBQyxHQUFHLEVBQUU7b0JBQ1osT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDdkIsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN2QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBRVIsT0FBTyxPQUFPLENBQUM7YUFDbEI7U0FDSjtRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUV2QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUlPLE1BQU07UUFFVixNQUFNLE1BQU0sR0FBUSxJQUFJLENBQUMsV0FBVyxDQUFDO1FBRXJDLElBQUksTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLFdBQVcsRUFBRTtZQUVyQixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7OztZQS9ESixVQUFVOzs7NENBS0YsTUFBTSxTQUFDLDBCQUEwQjs0Q0FDakMsTUFBTSxTQUFDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXZlbnQsIEh0dHBIYW5kbGVyLCBIdHRwSGVhZGVycywgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVxdWVzdCwgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBJQmFja2VuZE1vY2tEYXRhUHJvdmlkZXIgfSBmcm9tIFwiLi9pYmFja2VuZC1tb2NrZGF0YS1wcm92aWRlclwiO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcGlNb2NrSHR0cEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcblxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIEBJbmplY3QoJ0lCYWNrZW5kTW9ja0RhdGFQcm92aWRlcicpIHByaXZhdGUgYmFja2VuZDogSUJhY2tlbmRNb2NrRGF0YVByb3ZpZGVyLFxuICAgICAgICBASW5qZWN0KCdlbnYnKSBwcml2YXRlIGVudmlyb25tZW50XG4gICAgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFbnZpcm9ubWVudDogJyxlbnZpcm9ubWVudCk7XG4gICAgfVxuXG4gICAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG5cblxuICAgICAgICBpZiAodGhpcy5ub01vY2soKSkge1xuXG4gICAgICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGludGVyYWN0aW9ucyA9IHRoaXMuYmFja2VuZC5nZXRBbGxJbnRlcmFjdGlvbnMoKTtcblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBpbnRlcmFjdGlvbnMpIHtcblxuICAgICAgICAgICAgY29uc3QgaW50ID0gaW50ZXJhY3Rpb25zW2tleV07XG5cbiAgICAgICAgICAgIGlmIChpbnQuYWNjZXB0cyhyZXEpKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgaGFuZGxlciA9IG5ldyBTdWJqZWN0PEh0dHBFdmVudDxhbnk+PigpO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKFwiRm91bmQgYSByZXNwb25zZSBpbnRlcmFjdGlvbi5cIik7XG5cbiAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBuZXcgSHR0cFJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgICAgICAgYm9keTogaW50LnJlc3BvbnNlQm9keSxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogaW50LnJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBpbnQucmVzcG9uc2VDb2RlLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IHJlcS51cmxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyLm5leHQocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coJ3JlZGlyZWN0ZWQgdG8gcmVhbCBwYXRoJyk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgICB9XG5cblxuXG4gICAgcHJpdmF0ZSBub01vY2soKTogYm9vbGVhbiB7XG5cbiAgICAgICAgY29uc3QgZW52QW55OiBhbnkgPSB0aGlzLmVudmlyb25tZW50O1xuXG4gICAgICAgIGlmIChlbnZBbnk/Lm1vY2tCYWNrZW5kKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59Il19