import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Quiz } from './quiz.entity';

@Entity('user', { schema: 'users' })
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @OneToMany((type) => Quiz, (quiz) => quiz.id)
  quiz: Quiz[];
}
