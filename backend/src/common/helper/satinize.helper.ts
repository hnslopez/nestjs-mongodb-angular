import * as sanitizeHtml from 'sanitize-html';

export class sanitizeHelper {

      /**
   * Satinizador de texto total
   * @param str {string}
   * @returns Promise<string> Retorna texto Satinizado
   */
  public static satonizeALL(str: string):string {
    return  sanitizeHtml(str,{ allowedTags: [],  allowedAttributes: {}, disallowedTagsMode: 'discard'});
  }


  /**
   * Satinizador de texto, solo scripts
   * @param str 
   * @returns string, Retorna texto sin scripts y sin su contenido
   */
  public static satinizeOnlyScripts(str:string):string{
    return sanitizeHtml(str);
  }

      /**
   * Satinizador de array de textos
   * @param str {string[]}
   * @returns Promise<string> Retorna texto Satinizado
   */
  public static satonizeALLArray(str: string[]):string[] {
    let value = [];
    str.forEach((i)=>{
      value.push(sanitizeHtml(i,{ allowedTags: [],  allowedAttributes: {}, disallowedTagsMode: 'discard'}));
    });
    
      return value;
    }
}