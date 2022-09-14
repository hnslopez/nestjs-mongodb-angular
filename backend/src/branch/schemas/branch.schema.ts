import mongoose, { Schema } from 'mongoose';
import { EstatusBranch } from 'src/common/enum';

export const BranchSchema = new Schema({
    name:{type:String, require},
    user:{ type: mongoose.Types.ObjectId, ref:'User' },
    token:{type:String },
    createdAt: { type: Date, default: Date.now },
    status: {type:String, enum:EstatusBranch, required: true, default: EstatusBranch.ACTIVE}
});