import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Quiz } from 'src/entities/quiz.entity';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly email: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  readonly quiz?: Quiz[];
}
export class UpdateUserDto extends PartialType(CreateUserDto) {}
