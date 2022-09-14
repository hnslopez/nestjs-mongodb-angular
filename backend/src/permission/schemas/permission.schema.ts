import mongoose, { Schema } from 'mongoose';
import { ECrud } from 'src/common/enum/crud.enum';
import { EMethod } from 'src/common/enum/method.enum';

export const PermissionSchema = new Schema({
    router:{ type:String}, //TODO: ENUM ROUTER LIST
    method:{ type:String, enum:EMethod, required:true},
    name:{ type:String, required:true },
    enable:{ type:Boolean, required:true},
    branch: { type:mongoose.Types.ObjectId, ref:'Branch', required:true}
})