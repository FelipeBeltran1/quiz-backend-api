import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from 'src/entities/quiz.entity';
import { CreateQuizDto, UpdateQuizDto } from '../dto/quiz.dto';
import { Repository } from 'typeorm';
import fetch from 'cross-fetch';

@Injectable()
export class QuizzesService {
  constructor(
    @InjectRepository(Quiz, 'quizzes')
    private readonly quizRepository: Repository<Quiz>,
  ) {}

  async findAll() {
    return await this.quizRepository.find();
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
    // const response = await fetch(
    //   'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean',
    // );
    //const data = await response.json();
    console.log(
      await fetch(
        'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean',
      ),
    );
    //return await this.quizRepository.save(data);
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
