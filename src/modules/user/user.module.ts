import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { SerivesService } from './services/serives.service';

@Module({
  controllers: [UserController],
  providers: [SerivesService],
})
export class UserModule {}
