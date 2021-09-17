import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from 'src/entities/quiz.entity';
import { CreateQuizDto, UpdateQuizDto } from '../dto/quiz.dto';
import { Repository } from 'typeorm';

@Injectable()
export class quizzesService {
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
