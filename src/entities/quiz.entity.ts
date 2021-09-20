/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Question } from './question.entity';
import { User } from './user.entity';

@Entity('quiz', { schema: 'quizzes' })
export class Quiz {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany((type) => Question, (question) => question.quiz)
  questions: Question[];

  @ManyToOne((type) => User, (user) => user.quiz)
  user: User;
}
