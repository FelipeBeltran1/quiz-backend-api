import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateQuestionDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly category: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly type: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly difficulty: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly question: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly correct_answer: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly incorrect_answer: string[];
}
export class UpdateQuestionDto extends PartialType(CreateQuestionDto) {}
