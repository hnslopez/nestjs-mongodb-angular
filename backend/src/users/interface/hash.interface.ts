import { Document } from 'mongoose';
import { IUser } from './user.interface';

export interface IHash extends Document {
    readonly user:IUser;
    readonly updatedAt:Date;
    readonly hashRefreshToken: string;


   // readonly device:string;
   // readonly browser:string;

}