import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Question } from './question.entity';

@Entity('quiz', { schema: 'quizzes' })
export class Quiz {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany((type) => Question, (question) => question.quiz)
  questions: Question[];
}
