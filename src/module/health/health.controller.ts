import { Controller, Get } from '@nestjs/common';

import { HealthService } from './health.service.js';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  async getHealth() {
    return await this.healthService.getHealth();
  }
}
