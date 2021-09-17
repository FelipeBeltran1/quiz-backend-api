import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizController } from './quiz.controller';
import { QuizzesService } from './services/quiz.service';
import { Quiz } from 'src/entities/quiz.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz], 'quizzes')],
  controllers: [QuizController],
  providers: [QuizzesService],
})
export class QuizModule {}
