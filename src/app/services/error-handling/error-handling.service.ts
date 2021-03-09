import { ErrorHandler, Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService implements ErrorHandler, HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);

    return next.handle(req);
  }

  handleError(error) {
    // your custom error handling logic
    console.log(`There was an error`);
  }
}
