/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Quiz } from './quiz.entity';

@Entity('question', { schema: 'questions' })
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category: string;

  @Column()
  type: string;

  @Column()
  difficulty: string;

  @Column({ length: 1000 })
  question: string;

  @Column()
  correct_answer: boolean;

  @ManyToOne((type) => Quiz, (quiz) => quiz.questions)
  quiz: Quiz;
}
