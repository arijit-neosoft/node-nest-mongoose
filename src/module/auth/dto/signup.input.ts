import { Transform } from 'class-transformer';
import { IsEmail, IsPhoneNumber, IsString, Length } from 'class-validator';

import { IsDate_yyyyMMdd } from '../../../validation/customClassValidation/isDate_yyyyMMdd.js';

export class DTO_SignupInput {
  @IsString()
  @Length(2, 255, { message: 'firstName must be between 2 and 255 characters' })
  @Transform(({ value }: { value: string }) => value.trim())
  firstName: string;

  @IsString()
  @Length(2, 255, { message: 'firstName must be between 2 and 255 characters' })
  @Transform(({ value }: { value: string }) => value.trim())
  lastName: string;

  @IsEmail({}, { message: 'Invalid email address' })
  email: string;

  @IsString()
  @Length(8, 50, { message: 'Password must be between 8 and 128 characters' })
  @Transform(({ value }: { value: string }) => value.trim())
  password: string;

  @IsDate_yyyyMMdd()
  @Transform(({ value }: { value: string }) => value.trim())
  dob: string;

  @IsPhoneNumber(undefined, { message: 'Phone number is not a valid number' })
  @Transform(({ value }: { value: string }) => value.trim())
  phoneNumber: string;
}
