import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export enum Role {
  ADMIN = 'ADMIN',
  MODERATOR = 'MODERATOR',
  USER = 'USER',
}

@Schema({ timestamps: true, collection: 'user' })
export class User {
  _id: Types.ObjectId;

  @Prop({ type: String, required: true })
  firstName: string;

  @Prop({ type: String, required: true })
  lastName: string;

  @Prop({ type: String, required: true, unique: true })
  email: string;

  @Prop({ type: String, required: true })
  passwordHash: string;

  @Prop({ type: String, required: true })
  dob: string;

  @Prop({ type: String, required: true })
  phoneNumber: string;

  @Prop({ type: Boolean, required: true })
  verified: boolean;

  @Prop({ type: Boolean, required: true })
  active: boolean;

  @Prop({ type: String, enum: Object.values(Role), default: Role.ADMIN })
  role: Role;

  createdAt: Date;

  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
export type UserDocument = HydratedDocument<User>;
