import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthFacade } from '../../auth/store/auth.facade';
import { TokenStorageService } from '../services';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authFacade: AuthFacade,
    private tokenStorageService: TokenStorageService
  ) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const accessToken = this.tokenStorageService.getAccessToken();
    if (accessToken) {
      req = req.clone({
                //TODO: MOVER A VARIABLE DE ENTORNO

        setHeaders: { Authorization: `Bearer ${accessToken}`, code:'U2FsdGVkX189kbOsDVLvhj1kqsIRPfBUSaAcdA5xFFsVbytGQDeyP1ujS4HMRYmt' }
      });
    }else{
      req = req.clone({
        //TODO: MOVER A VARIABLE DE ENTORNO
        setHeaders: { code:'U2FsdGVkX189kbOsDVLvhj1kqsIRPfBUSaAcdA5xFFsVbytGQDeyP1ujS4HMRYmt' }
      });
    }

    return next.handle(req).pipe(s => this.handleErrors(s, req.url));
  }

  private handleErrors(source: Observable<HttpEvent<unknown>>, urlPath: string): Observable<HttpEvent<unknown>> {
    return source.pipe(
      catchError((error: HttpErrorResponse) => {
        // try to avoid errors on logout
        // therefore we check the url path of '/auth/'
        if (error.status === 401 && !urlPath.includes('/auth/')) {
          return this.handle401();
        }

        // rethrow error
        return throwError(() => error);
      })
    );
  }

  private handle401() {
    this.authFacade.logout();
    return EMPTY;
  }
}
