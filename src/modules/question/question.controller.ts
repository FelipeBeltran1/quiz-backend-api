import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  CreateQuestionDto,
  UpdateQuestionDto,
} from '../question/dto/question.dto';
import { QuestionsService } from '../question/services/question.service';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post()
  create(@Body() createQuizDto: CreateQuestionDto) {
    return this.questionsService.create(createQuizDto);
  }

  @Get()
  findAll() {
    return this.questionsService.findAll();
  }

  //   @Post(':nameQuiz')
  //   createQuiz(@Param('nameQuiz') nameQuiz: string) {
  //     return this.questionsService.createQuiz(nameQuiz);
  //   }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionsService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateQuestionDto: UpdateQuestionDto,
  ) {
    return this.questionsService.update(+id, updateQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionsService.delete(+id);
  }
}
