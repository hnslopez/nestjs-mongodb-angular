import mongoose, { Document } from 'mongoose';
import { IRoles } from 'src/roles/interface/roles.interface';
import { IHash } from './hash.interface';
import { IProfile } from './profile.interface';

export interface IUser extends Document {
    readonly username:string;
    readonly profile:IProfile;
    readonly hash: IHash;
             password:string;
    readonly createdAt:Date;
    readonly verified:boolean;
    
}