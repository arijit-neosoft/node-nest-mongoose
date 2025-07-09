import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { AuthService } from './auth.service.js';
import { DTO_SignupInput } from './dto/signup.input.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  async signup(@Body() signupInput: DTO_SignupInput) {
    return await this.authService.signup(signupInput);
  }
}
