import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from 'src/entities/question.entity';
import { Repository } from 'typeorm';
import { CreateQuestionDto, UpdateQuestionDto } from '../dto/question.dto';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Question, 'questions')
    private readonly questionRepository: Repository<Question>,
  ) {}

  async findAll() {
    return await this.questionRepository.find();
  }

  async findOne(id: number) {
    try {
      const question = await this.questionRepository.findOneOrFail(id);
      return question;
    } catch (error) {
      throw error;
    }
  }

  async create(id: number, payload: CreateQuestionDto) {
    const newQuestion = await this.questionRepository.create({
      quiz: { id },
      ...payload,
    });
    return await this.questionRepository.save(newQuestion);
  }

  async update(id: number, payload: UpdateQuestionDto) {
    let question = await this.findOne(id);
    question = {
      ...question,
      ...payload,
    };
    return await this.questionRepository.save(question);
  }

  async delete(id: number) {
    const question = await this.findOne(id);
    return await this.questionRepository.remove(question);
  }
}
