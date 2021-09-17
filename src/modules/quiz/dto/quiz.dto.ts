import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';
import { Question } from 'src/entities/question.entity';

export class CreateQuizDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly questions: Question[];
}
export class UpdateQuizDto extends PartialType(CreateQuizDto) {}
