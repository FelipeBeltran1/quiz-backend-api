import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
