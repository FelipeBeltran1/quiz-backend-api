import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateQuizDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
export class UpdateQuizDto extends PartialType(CreateQuizDto) {}
