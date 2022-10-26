import * as bcrypt from 'bcryptjs';
import * as argon2 from 'argon2';
var CryptoJS = require("crypto-js");
 
export class HashHelper {
  private static salt = 10;
  private static nonce;
 
  /**
   * Encripta texto plano
   * @param str {string}
   * @returns Promise<string> Retorna texto encriptado
   */
  public static async encrypt(str: string): Promise<string> {
    return await bcrypt.hash(str, this.salt);
  }

  /**
   * Compara texto encriptado y texto ingresado
   * @param str {string}
   * @param encrypted {string}
   * @returns Promise<boolean>, Retorna un boolean, True si el texto encriptado y el ingresado son iguales.
   */
  public static async compare(str: string, encrypted: string): Promise<boolean> {
    return await bcrypt.compare(str, encrypted);
  }

  /**
   * Genera un token para branch
   * @param str {string}, mongoId
   * @returns Promise<string>, Retorna el token
   */
  public static async tokenGenerator(str:string): Promise<string> {
    return  CryptoJS.AES.encrypt(str, process.env.TOKEN_BRANCH).toString(); 
   }

   /**
    * Decripta token de branch
    * @param token, token encriptado
   * @returns Promise<string>, Retorna el token decriptado
    */
   public static async decryptToken(token:string): Promise<string>{
    var bytes = await CryptoJS.AES.decrypt(token.toString(), process.env.TOKEN_BRANCH);
    
    return bytes.toString(CryptoJS.enc.Utf8);
   }

   /**
    * Refresca tokens de autentificación
    * @param str, Token
    * @returns Promise<string>, Retorna nuevo token
    */
  public static hashRefreshToken(str: string):Promise<string>{
    return argon2.hash(str);
  }

  /**
   * Compara token encriptado y token ingresado
   * @param str token
   * @param encripted hasRefeshToken
   * @returns Promise<boolean>, Retorna un booleano, True si el token encriptado y el ingresado son iguales.
   */
  public static async compareHashRefreshToken(str:string, encripted: string):Promise<boolean>{
    return argon2.verify(str, encripted);
  }

  /**
   *  
   * @returns Promise<string>, Retorna un string, Un token para Nonce (csp)
   */
  public static generateNonce():Promise<string>{
    var bytes = CryptoJS.AES.encrypt(process.env.WORD_NONCE, process.env.TOKEN_NONCE).toString();

    this.nonce = bytes.toString(CryptoJS.enc.Utf8)
    return HashHelper.nonce;
  }

  public static getNonce():Promise<string>{
    return HashHelper.nonce;
  }

}
