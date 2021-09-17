import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateQuestionDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

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

  @IsBoolean()
  readonly correct_answer: boolean;
}
export class UpdateQuestionDto extends PartialType(CreateQuestionDto) {}
