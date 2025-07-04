import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getBase() {
    return 'base: ok';
  }
}
