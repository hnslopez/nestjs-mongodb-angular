import mongoose from 'mongoose';
import { Schema } from 'mongoose';


export const RouterSchema = new Schema({
    name:   {type:String},
    router: { type:String, required:true},
    method: { type:String, required:true},
    status:{ type:Boolean, required:true, default:true},
    branch:{ type:mongoose.Types.ObjectId, ref:'Branch'},

    
})

