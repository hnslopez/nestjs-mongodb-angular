import { HttpClient, HttpParams } from '@angular/common/http';
import { APP_INITIALIZER, Injectable, Provider } from '@angular/core';
import { Store } from '@ngrx/store';
import { lastValueFrom, Observable, throwError } from 'rxjs';
import { filter, take } from 'rxjs/operators';

import { ConfigService, TokenStorageService } from '../core/services';
import * as AuthActions from './store/auth.actions';
import { AuthState, AuthUser, TokenStatus } from './store/auth.models';
import * as AuthSelectors from './store/auth.selectors';

export interface AccessData {
  token_type: 'Bearer';
  expires_in: number;
  access_token: string;
}

@Injectable()
export class AuthService {
  private hostUrl: string;


  constructor(
    private store: Store,
    private http: HttpClient,
    private configService: ConfigService,
    private tokenStorageService: TokenStorageService
  ) {
    this.hostUrl = this.configService.getAPIUrl();
    const authConfig = this.configService.getAuthSettings();

  }

  /**
   * Returns a promise that waits until
   * refresh token and get auth user
   *
   * @returns {Promise<AuthState>}
   */
  init(): Promise<AuthState> {
    this.store.dispatch(AuthActions.refreshTokenRequest());

    const authState$ = this.store.select(AuthSelectors.selectAuth).pipe(
      filter(
        auth =>
          auth.refreshTokenStatus === TokenStatus.INVALID ||
          (auth.refreshTokenStatus === TokenStatus.VALID && !!auth.user)
      ),
      take(1)
    );

    return lastValueFrom(authState$);
  }

  /**
   * Performs a request with user credentials
   * in order to get auth tokens
   *
   * @param {string} username
   * @param {string} password
   * @returns Observable<AccessData>
   */
  login(username: string, password: string): Observable<AccessData> {
    return this.http.post<AccessData>(`${this.hostUrl}auth/v2/login`, {
      grant_type: 'password',
      username,
      password,
    },{withCredentials:true});
  }

  /**
   * Performs a request for logout authenticated user
   *
   * @param {('all' | 'allButCurrent' | 'current')} [clients='current']
   * @returns Observable<void>
   */
  logout(clients: 'all' | 'allButCurrent' | 'current' = 'current'): Observable<void> {
    

    return this.http.get<void>(`${this.hostUrl}auth/v2/logout`, { withCredentials:true });
  }

  /** 
   * Asks for a new access token given
   * the stored refresh token
   *
   * @returns {Observable<AccessData>}
   */
  refreshToken(): Observable<AccessData> {
    /*
    const refreshToken = this.tokenStorageService.getRefreshToken();
    if (!refreshToken) {
      return throwError(() => new Error('Refresh token does not exist'));
    }*/
  
    return this.http.post<AccessData>(`${this.hostUrl}auth/v2/refresh`,{},{withCredentials:true });
  }

  /**
   * Returns authenticated user
   * based on saved access token
   *
   * @returns {Observable<AuthUser>}
   */
  getAuthUser(): Observable<AuthUser> {
    return this.http.get<AuthUser>(`${this.hostUrl}users/profile`,{withCredentials:true});
  }
}

export const authServiceInitProvider: Provider = {
  provide: APP_INITIALIZER,
  useFactory: (authService: AuthService) => () => authService.init(),
  deps: [AuthService],
  multi: true,
};
