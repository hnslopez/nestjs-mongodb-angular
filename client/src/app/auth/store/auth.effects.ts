import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, finalize, map, tap } from 'rxjs/operators';

import { TokenStorageService } from '../../core/services';
import { AuthService } from '../auth.service';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginRequest),
      exhaustMap(credentials =>
        this.authService.login(credentials.username, credentials.password).pipe(
          map(data => {
            this.tokenStorageService.saveTokens(data.access_token);
            return AuthActions.loginSuccess();
          }),
          catchError(error => of(AuthActions.loginFailure({ error })))
        )
      )
    );
  });

  onLoginSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginSuccess),
      map(() => {

        this.router.navigateByUrl('/');
        return AuthActions.getAuthUserRequest();
      })
    );
  });

  logout$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.logout),
        exhaustMap(() => {
          this.router.navigateByUrl('/');
          return this.authService
            .logout()
            .pipe(finalize(() => this.tokenStorageService.removeTokens()));
        })
      );
    },
    { dispatch: false }
  );

  getUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.refreshTokenSuccess, AuthActions.getAuthUserRequest),
      exhaustMap(() =>
        this.authService.getAuthUser().pipe(
          map(user => AuthActions.getAuthUserSuccess({ user })),
          catchError(error => of(AuthActions.getAuthUserFailure({error})))
        )
      )
    );
  });

  refreshToken$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.refreshTokenRequest),
      exhaustMap(() =>
        this.authService.refreshToken().pipe(
          map(data => {
            // save tokens
            this.tokenStorageService.saveTokens(data.access_token);
            // trigger refresh token success action
            return AuthActions.refreshTokenSuccess();
          }),
          catchError(error => of(AuthActions.refreshTokenFailure({error})))
        )
      )
    );
  });

  onLoginOrRefreshTokenFailure$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.loginFailure, AuthActions.refreshTokenFailure),
        tap(() => {
          this.tokenStorageService.removeTokens();
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private router: Router,
    private actions$: Actions,
    private authService: AuthService,
    private tokenStorageService: TokenStorageService
  ) {}
}
