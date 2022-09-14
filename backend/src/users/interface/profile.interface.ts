import { Document } from 'mongoose';
import { IBranch } from 'src/branch/interface/branch.interface';
import { IRoles } from 'src/roles/interface/roles.interface';

export interface IProfile extends Document {
    readonly name:string;
    readonly lastName:string;
    readonly roles:[string];
    readonly branch:IBranch;
    readonly rolesBranch:IRoles;
    readonly rut:string;
    readonly status: string;
    readonly picture:string;
    readonly email:string;
    readonly phone:string;
    readonly career:string;
    readonly themesInterest:[string];
    readonly semesterProgress:number;
    readonly lastLogin:Date;



}