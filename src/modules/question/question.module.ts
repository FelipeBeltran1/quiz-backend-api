import { Module } from '@nestjs/common';
import { QuestionsService } from './services/question.service';
import { QuestionController } from './question.controller';
import { Question } from 'src/entities/question.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Question], 'questions')],
  providers: [QuestionsService],
  controllers: [QuestionController],
})
export class QuestionModule {}
