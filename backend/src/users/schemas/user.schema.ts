import mongoose, { Schema } from 'mongoose';
import { HashHelper } from 'src/common/helper';

export const UserSchema = new Schema({
    username: { type: String, required: true },
    profile:{type: mongoose.Types.ObjectId, ref:'Profile'},
    hash:{type: mongoose.Types.ObjectId, ref:'Hash'},
    password: { type: String, required: true, select: false },
    createdAt: { type: Date, default: Date.now },
    verified: { type: Boolean, default: false },
}).pre("save", async function (next) {

    if (!this.isModified('password')) return next();
    this.password = await HashHelper.encrypt(this.password);

    return next();

})