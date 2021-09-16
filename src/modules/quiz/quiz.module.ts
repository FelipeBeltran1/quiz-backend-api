import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { ServicesService } from './services/quiz.service';

@Module({
  controllers: [QuizController],
  providers: [ServicesService],
})
export class QuizModule {}
