import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateQuestionDto {
  @IsString()
  @IsNotEmpty()
  readonly category: string;

  @IsString()
  @IsNotEmpty()
  readonly type: string;

  @IsString()
  @IsNotEmpty()
  readonly difficulty: string;

  @IsString()
  @IsNotEmpty()
  readonly question: string;

  @IsString()
  @IsNotEmpty()
  readonly correct_answer: string;

  @IsString()
  @IsNotEmpty()
  readonly incorrect_answer: string[];
}
export class UpdateQuestionDto extends PartialType(CreateQuestionDto) {}
