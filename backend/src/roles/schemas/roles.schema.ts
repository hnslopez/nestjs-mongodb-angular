import mongoose, { Schema } from 'mongoose';
import { ERoles } from 'src/common/enum/roles-status.enum';


export const RolesSchema = new Schema({
    name:{ type:String, required:true},
    status:{ type:String, enum:ERoles, default: ERoles.ACTIVE},
    branch: { type:mongoose.Types.ObjectId, ref:'Branch', required:true},
    permission:[{type:mongoose.Types.ObjectId, ref:'Permission'}]
})