import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from 'src/entities/question.entity';
import { CreateQuizDto, UpdateQuizDto } from 'src/modules/quiz/dto/quiz.dto';
import { Repository } from 'typeorm';

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

  async create(payload: CreateQuizDto) {
    const newQuestion = await this.questionRepository.create(payload);
    return await this.questionRepository.save(newQuestion);
  }

  //   async createQuiz(nameQuiz: string) {
  //     // const response = await fetch(
  //     //   'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean',
  //     // );
  //     //const data = await response.json();
  //     console.log(
  //       await fetch(
  //         'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean',
  //       ),
  //     );
  //     //return await this.quizRepository.save(data);
  //   }

  async update(id: number, payload: UpdateQuizDto) {
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
