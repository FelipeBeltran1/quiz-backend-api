import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Quiz } from 'src/entities/quiz.entity';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly email: string;

  @IsNumber()
  @IsOptional()
  readonly quiz?: Quiz[];
}
export class UpdateUserDto extends PartialType(CreateUserDto) {}
