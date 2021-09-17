import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Quiz } from './quiz.entity';

@Entity('question', { schema: 'questions' })
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column()
  type: string;

  @Column()
  difficulty: string;

  @Column()
  question: string;

  @Column()
  correct_answer: boolean;

  @ManyToOne((type) => Quiz, (quiz) => quiz.questions)
  quiz: Quiz;
}
