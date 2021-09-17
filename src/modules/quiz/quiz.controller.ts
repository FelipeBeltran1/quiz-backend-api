import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateQuizDto, UpdateQuizDto } from './dto/quiz.dto';
import { QuizzesService } from './services/quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizzesService: QuizzesService) {}

  @Post()
  async create(@Body() createQuizDto: CreateQuizDto) {
    return await this.quizzesService.create(createQuizDto);
  }

  @Get()
  async findAll() {
    return await this.quizzesService.findAll();
  }

  // @Post(':nameQuiz')
  // createQuiz(@Param('nameQuiz') nameQuiz: string) {
  //   return this.quizzesService.createQuiz(nameQuiz);
  // }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.quizzesService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateQuizDto: UpdateQuizDto) {
    return await this.quizzesService.update(+id, updateQuizDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.quizzesService.delete(+id);
  }
}
