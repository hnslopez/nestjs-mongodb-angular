import { Document } from 'mongoose';
import { IBranch } from 'src/branch/interface/branch.interface';


export interface IPermisssion extends Document {
    readonly router:string;
    readonly method:string;
    readonly name:string;
    readonly enable:boolean;
    readonly branch:IBranch;


}