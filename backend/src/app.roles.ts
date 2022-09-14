import { RolesBuilder } from "nest-access-control";

export const roles: RolesBuilder = new RolesBuilder();

/**
 * Lista de roles dentro del sistema.
 */
export enum AppRoles {
    ADMIN = 'ADMIN',
    USER = 'USER'
}

/**
 * Lista de rutas disponibles.
 * La ruta 'POST' esta de ejemplo
 */

export enum AppResources {
    USER = 'USER'
}
//AUTHOR ROLES EXAMPLE
roles
    .grant(AppRoles.ADMIN)
    .updateOwn([AppResources.USER])
    .deleteOwn([AppResources.USER])
    .readOwn([AppResources.USER])


    //ADMIN ROLES EXAMPLE
    .grant(AppRoles.ADMIN)
    .createAny([AppResources.USER])
    .updateOwn([AppResources.USER])

