import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


type AppEnv = typeof environment;

@Injectable({ providedIn: 'root' })
export class ConfigService {


  /**
   * @returns configuación de la app
   */
  getEnvironment(): AppEnv {
    return environment;
  }

  /**
   * 
   * @returns Si esta la app en producción
   */

  isProd(): boolean {
    return environment.production;
  }

  /**
 * Returns app's version
 */
  getVersion(): string {
    return environment.appVersion;
  }

  /**
* Returns the server's host url
*/
  getAPIUrl(): string {
    return environment?.apiUrl ?? '';
  }

  /**
 * Returns configuration for auth client and secret
 */
  getAuthSettings(): AppEnv['settings']['auth'] {
    return environment?.settings?.auth;
  }
}
