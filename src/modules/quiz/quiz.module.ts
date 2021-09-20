import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizController } from './quiz.controller';
import { QuizzesService } from './services/quiz.service';
import { Quiz } from 'src/entities/quiz.entity';
import { QuestionModule } from '../question/question.module';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz], 'quizzes'), QuestionModule],
  controllers: [QuizController],
  providers: [QuizzesService],
})
export class QuizModule {}
