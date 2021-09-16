import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { QuizController } from './modules/quiz/quiz.controller';
import { QuizModule } from './modules/quiz/quiz.module';
import { QuizModule } from './modules/quiz/quiz.module';
import typeormConfig from './@common/config/typeorm.config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [typeormConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get('typeorm.users'),
      name: 'users',
    }),
    UserModule,
    QuizModule,
  ],
  controllers: [AppController, QuizController],
  providers: [AppService],
})
export class AppModule {}
