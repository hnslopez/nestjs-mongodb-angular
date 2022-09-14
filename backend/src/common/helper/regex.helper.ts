
export class regexHelper {
   public static onlyNumbers = /(?!^\d+$)^.+$/;
   public static specialCharacters = /^[a-z ,.'-/0-9]*$/;
   public static onlyTextfirst3 = /\d*(?:[a-zA-Z]){3,}\d*/;
   public static onlyText = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
   public static phoneNumberValidator = /((00)?(\+)?\d{1,3})[-\s]+(\d{1,3})[-\s]+(\d{4,10})/;
   public static onlyNumbersPlusSpace = /^[+][0-9 ]+$/;
   public static rutValidar = /^(\d{1,3}(?:\.\d{1,3}){2}-[\dkK])$/;
}