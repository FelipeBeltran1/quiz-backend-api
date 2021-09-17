import { PartialType } from '@nestjs/mapped-types';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { Question } from 'src/entities/question.entity';

export class CreateQuizDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @IsArray()
  readonly questions: Question[];
}
export class UpdateQuizDto extends PartialType(CreateQuizDto) {}
