import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { IHash } from './interface/hash.interface';
import { IProfile } from './interface/profile.interface';
import { IUser } from './interface/user.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private userModel: Model<IUser>,
    @InjectModel('Profile') private profileModel: Model<IProfile>,
    @InjectModel('Hash') private hashModel: Model<IHash>
  ) { }

  async create(createUserDto: CreateUserDto, code:string) {
    const profile = new this.profileModel({ ...createUserDto,branch:code });
    await profile.save();

    const profileId = profile._id.toString();

    const user = new this.userModel({ ...createUserDto, profile: profileId });
    await user.save();

    return user;
  }

  async findAll(id:string) {
    const users = await this.profileModel.find({branch:id});
    return users;
  }

  async getUserbyUsernameFilter(username:string):Promise<boolean>{

    const user = await this.userModel.findOne({username});
    if(user) return false;

    return true;
  }

  async getUserByEmail(email: string): Promise<IProfile> {
    const user = await this.profileModel.findOne({ email }).select('+password');
    return user;
  }
  async getUserByUsername(username: string): Promise<IUser> {
    const user = await this.userModel.findOne({ username }).select('+password');
    return user;
  }

  async getUserProfileByUsername(id: string): Promise<IProfile>{
    const profile = await this.profileModel.findOne({id});
    return profile;
  }

  async getUserById(id: string, UserInterface?: IUser): Promise<IUser> {
    const user = await this.userModel.findOne({ _id: id })
    .populate('profile')
    .populate({path:'profile', populate:{path:'rolesBranch',model:'Roles',populate:{path:'permission', model:'Permission'}}})
    .then(u => !UserInterface ? u : !!u && UserInterface.id === u.id ? u : null);

    return user;
  }

  async updateOrCreateHashToken(_id: string, hashRefreshToken: string) {
    try {
      var hash = await this.hashModel.findOneAndUpdate({ user: _id }, {user:_id,hashRefreshToken, updatedAt:Date.now() }, { new: true });

      if (!hash) {
        hash = new this.hashModel({ user: _id, hashRefreshToken: hashRefreshToken });
        await hash.save();
      }

      return hash;
    } catch (e) {

      const hash = new this.hashModel({ user: _id, hashRefreshToken: hashRefreshToken });
      await hash.save();
      return hash;
    }
  }

  async getfreshToken(_id:string){
    const token = await this.hashModel.findOne({user:_id});
    return token;
  }

  async deleteHashToken(_id: string) {
    const hash = await this.hashModel.findOneAndDelete({ user:  _id  });
    return hash;
  }

}
