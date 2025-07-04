import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';

export enum Role {
  ADMIN = 'ADMIN',
  PROCUREMENT_MANAGER = 'PROCUREMENT_MANAGER',
  INSPECTION_MANAGER = 'INSPECTION_MANAGER',
  CLIENT = 'CLIENT',
}

@Schema({ timestamps: true, collection: 'user' })
export class User {
  @Prop()
  _id: ObjectId;

  @Prop({ type: String, required: true })
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;

  @Prop()
  passwordHash: string;

  @Prop()
  dob: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  verified: boolean;

  @Prop()
  active: boolean;

  @Prop()
  role: Role;
}

export const UserModel = SchemaFactory.createForClass(User);
export type IUser = HydratedDocument<User>;
