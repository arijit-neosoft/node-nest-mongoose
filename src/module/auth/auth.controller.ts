import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() body: unknown) {
    await this.authService.signup(body);
    return 'signup';
  }
}
