import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly email: string;
}
export class UpdateUserDto extends PartialType(CreateUserDto) {}
