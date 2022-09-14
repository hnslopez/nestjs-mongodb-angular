export interface IRefreshHash{
    
    readonly sub: string;
    readonly iat: number;
    readonly exp: number;
    readonly refreshToken: string;


}