import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('quiz', { schema: 'quizzes' })
export class Quiz {
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
