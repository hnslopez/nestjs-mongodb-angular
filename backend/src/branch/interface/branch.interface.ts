import { Document } from 'mongoose';
import { IUser } from 'src/users/interface/user.interface';

export interface IBranch extends Document {
    readonly name:string;
    readonly user:IUser;
     token: string;
    readonly createdAt: Date;
    readonly status: string;
}