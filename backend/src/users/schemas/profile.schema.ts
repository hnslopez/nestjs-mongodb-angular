import mongoose, { Schema } from 'mongoose';
import { statusUser } from 'src/common/enum/user-status.enum';
import { AppRoles } from 'src/app.roles';

export const ProfileSchema = new Schema({
   // user: { type: mongoose.Types.ObjectId, ref:'User', required:true },
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    roles: { type: [String], required: true, enum: AppRoles, default: AppRoles.USER },
    branch:    {type:mongoose.Types.ObjectId, ref:'Branch', required:true},
    //revisar
    rolesBranch:   [{type:mongoose.Types.ObjectId, ref:'Roles', required:true}],
    rut:{type:String, required:true},
    status: { type: String, enum: statusUser, default: statusUser.WAITING },
    picture:{ type:String},
    email: { type: String, required: true },
    phone:{ type:String, required: true},
    career:{ type:String, required:true},
    themesInterest: {type:[String], required:true},
    semesterProgress:{type:Number, min:1, max:8, required:true},
    lastLogin: {type: Date, default:Date.now, required:true}

})