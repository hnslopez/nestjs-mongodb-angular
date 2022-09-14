import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { RouterService } from "src/router/router.service";


@Injectable()
export class RouterGuard implements CanActivate{ 
    constructor(private readonly routerService:RouterService) {}
    
    async canActivate(context: ExecutionContext){
        const request = context.switchToHttp().getRequest();
        const header = request.headers.code;
        const roles = context.switchToHttp().getRequest().user?.profile.rolesBranch;
        var routesEnables = [];
        
        if(roles.length != 0){
            const permission = roles.map((roles)=> roles.permission).filter((permission) => permission.length > 0)
            .map((permission) => {
                return permission.map((permission)=>{
                    return [permission.router.toLowerCase(), permission.method.toLowerCase()]
               })
            })

            routesEnables = routesEnables.concat(...permission)
        }

        if(!header) return false;

        //TODO: QUITARLO
        return true;

        const access = await (await this.routerService.access(request.method.toLowerCase(), request.route.path, header));
        let permissionEnable = routesEnables.some((permission)=> JSON.stringify(permission) === JSON.stringify([access.router, access.method]));
        if(header == process.env.CENTRAL_TOKEN && permissionEnable) return true;
     
        if(!access || !permissionEnable) return false;
        if(access?.status == false) return false;

        return true;

     }
    }

