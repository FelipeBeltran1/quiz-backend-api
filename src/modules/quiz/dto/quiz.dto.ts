import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { Question } from 'src/entities/question.entity';

export class CreateQuizDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsNotEmpty()
  @IsArray()
  @ApiProperty()
  readonly questions: Question[];
}
export class UpdateQuizDto extends PartialType(CreateQuizDto) {}
