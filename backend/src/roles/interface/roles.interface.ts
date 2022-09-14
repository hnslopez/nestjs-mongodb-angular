import { Document } from 'mongoose';
import { IBranch } from 'src/branch/interface/branch.interface';
import { IPermisssion } from 'src/permission/interface/permission.schema';


export interface IRoles extends Document {
    readonly name:string;
    readonly status:string;
    readonly branch: IBranch;
    readonly permission: IPermisssion;


}