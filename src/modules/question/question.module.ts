import { Module } from '@nestjs/common';
import { QuestionsService } from './services/question.service';
import { QuestionController } from './question.controller';

@Module({
  providers: [QuestionsService],
  controllers: [QuestionController],
})
export class QuestionModule {}
