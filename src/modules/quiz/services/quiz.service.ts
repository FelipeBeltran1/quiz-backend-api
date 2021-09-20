/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from 'src/entities/quiz.entity';
import { CreateQuizDto, UpdateQuizDto } from '../dto/quiz.dto';
import { Repository } from 'typeorm';
import fetch from 'cross-fetch';
import { QuestionsService } from 'src/modules/question/services/question.service';
import { UsersService } from 'src/modules/user/services/user.service';

@Injectable()
export class QuizzesService {
  constructor(
    @InjectRepository(Quiz, 'quizzes')
    private readonly quizRepository: Repository<Quiz>,
    private readonly questionService: QuestionsService,
  ) {}

  async findAll() {
    return await this.quizRepository.find({
      relations: ['questions', 'user'],
    });
  }

  async findOne(id: number) {
    try {
      const quiz = await this.quizRepository.findOneOrFail(id);
      return quiz;
    } catch (error) {
      throw error;
    }
  }

  async create(payload: CreateQuizDto) {
    const newQuiz = await this.quizRepository.create(payload);
    return await this.quizRepository.save(newQuiz);
  }

  async createQuiz(nameQuiz: string) {
    const response = await fetch(
      'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean',
    );
    const data = await response.json();
    data.name = nameQuiz;
    const quiz = await this.quizRepository.save(data);
    for (let index = 0; index < data.results.length; index++) {
      const element = data.results[index];
      const question = await this.questionService.create(quiz.id, element);
      console.log(element);
    }
    return await quiz;
  }

  async update(id: number, payload: UpdateQuizDto) {
    let quiz = await this.findOne(id);
    quiz = {
      ...quiz,
      ...payload,
    };
    return await this.quizRepository.save(quiz);
  }

  async delete(id: number) {
    const quiz = await this.findOne(id);
    return await this.quizRepository.remove(quiz);
  }
}
