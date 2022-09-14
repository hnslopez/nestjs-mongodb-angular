import mongoose, { Schema } from 'mongoose';

export const HashSchema = new Schema({
    user:{ type: mongoose.Types.ObjectId, ref:'User' },
    updatedAt: { type: Date, default: Date.now },
    hashRefreshToken: {type:String, required: true}
});