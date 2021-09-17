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
  create(@Body() createQuizDto: CreateQuizDto) {
    return this.quizzesService.create(createQuizDto);
  }

  @Get()
  findAll() {
    return this.quizzesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quizzesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() UpdateQuizDto: UpdateQuizDto) {
    return this.quizzesService.update(+id, UpdateQuizDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quizzesService.delete(+id);
  }
}
