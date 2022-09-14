import { Document } from 'mongoose';
import { IBranch } from 'src/branch/interface/branch.interface';

export interface IRouter extends Document {
    readonly name:   string;
    readonly router: string;
    readonly method: string;
    readonly status: boolean; 
    readonly branch: IBranch;

}