import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';

@Injectable()
export class SerivesService {
  constructor(
    @InjectRepository(User, 'users')
    private readonly userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    try {
      const user = await this.userRepository.findOneOrFail(id);
      return user;
    } catch (error) {
      throw error;
    }
  }

  create(payload: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(payload);
    return this.userRepository.save(newUser);
  }

  async update(id: number, payload: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    user.email = payload.email;
    return this.userRepository.save(user);
  }

  async delete(id: number): Promise<User> {
    const user = await this.findOne(id);
    return this.userRepository.remove(user);
  }
}
