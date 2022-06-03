import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {ToastrService} from "ngx-toastr";


@Injectable()
export class CatchErrorInterceptor implements HttpInterceptor {

    constructor(
      private toastrService: ToastrService
    ) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    // console.log('event--->>>', event);
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 403) {
                }
                else if (error.status === 404) {
                  this.toastrService.error('wrong request page!');
                } else {
                  let reason = '';
                  if (error.error && error.error.header) {
                    if (!error.error.header.processInfo.status) {
                      reason = error.error.header.processInfo.message;
                    }

                    if (!error.error.header.methodInfo.status) {
                      reason = error.error.header.methodInfo.message;
                    }
                  } else {
                    reason = 'SERVER IS NOT AVAILABLE';
                  }
                    const data = {
                        reason,
                        message: error?.message,
                        name: error?.name,
                        status: error?.status,
                        statusText: error?.statusText,
                        url: error?.url,
                    };
                    alert(data);
                 }
              return throwError(error);
            }));
    }
}
