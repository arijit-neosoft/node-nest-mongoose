import { Injectable } from '@nestjs/common';
import { appConfig } from 'src/config/appConfig.js';

@Injectable()
export class HealthService {
  async getHealth() {
    return `health: ok, env: ${appConfig.app.APP_ENV}`;
  }
}
