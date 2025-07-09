import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { IServiceResponse } from '../../interface/appResponse.inteface.js';
import { User } from '../../model/user.model.js';
import { DTO_SignupInput } from './dto/signup.input.js';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async signup(signupInput: DTO_SignupInput): Promise<IServiceResponse> {
    const res = await this.userModel.create(signupInput);

    return {
      success: true,
      message: 'signup success, proceed to verification',
      data: res,
    };
  }
}
