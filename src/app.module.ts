import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConfigModule } from './config/config.module.js';
import { AuthModule } from './rest/auth/auth.module.js';
import { UserModule } from './rest/user/user.module.js';

@Module({
  imports: [MongooseModule.forRoot('mongodb://root:password@localhost:27017/mydb?authSource=admin'), AuthModule, ConfigModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
