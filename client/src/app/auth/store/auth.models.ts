export enum TokenStatus {
  PENDING = 'PENDING',
  VALIDATING = 'VALIDATING',
  VALID = 'VALID',
  INVALID = 'INVALID',
}

export interface AuthState {
  isLoggedIn: boolean;
  user?: AuthUser;
  accessTokenStatus: TokenStatus;
  refreshTokenStatus: TokenStatus;
  isLoadingLogin: boolean;
  hasLoginError: {error:boolean, code:number};
}

export interface AuthUser {
  readonly name:string;
  readonly lastName:string;
  readonly status: string;
  readonly email:string;
}
