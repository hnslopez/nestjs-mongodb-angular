import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HashHelper } from 'src/common/helper';
import { GlobalService } from 'src/common/services/global.service';
import { UpdateRouterDto } from './dto/update-router.dto';
import { IRouter } from './interface/router.interface';

@Injectable()
export class RouterService implements OnModuleInit {
  constructor(@InjectModel('Router') private routerModel: Model<IRouter>,
  ){}

  async create(branch:any) {
    var router = [];
    for (let i = 0; i < GlobalService.routes.length; i++) {
      const element = GlobalService.routes[i].route;
      if(!GlobalService.routesBlocked.routes.some(v=> v.path == element.path && v.method == element.method)){
        router.push({method:element.method,router:element.path,branch:branch,status:true});
      }
    }
    const bulk = await this.routerModel.insertMany(router);
    return bulk;
  }

  async findOne(id: string) {
    const result = await this.routerModel.find({branch:id});
    return result;
  }

  async access(method: string, path:string, token:string) {
    const branch = await HashHelper.decryptToken(token);
    const result = await this.routerModel.findOne({router:path,method:method,branch:branch}); 
    return result;
  }

  async update(id: string, updateRouterDto: UpdateRouterDto) {
    var {status} = updateRouterDto;
    const result = await this.routerModel.findByIdAndUpdate(id,{status},{new:true});
    return result;
  }

  /**
   * @deprecated
   */
  private async loadRoutes(){
       /*
    const branch = await this.branchModel.find();
    var data = {};

     branch.map(async (r)=> {
        data[r._id.toString()] = [];

      await this.cacheManager.set(r._id.toString(), '');
    });
    
    const routes = await this.routerModel.find({branch});

 
    console.log(data)
    routes.map(async (r)=>{
      data[r.branch._id.toString()].push([]);
    });
    */

  }

  async onModuleInit() {
    await this.loadRoutes();

  }
}
