import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('quiz', { schema: 'quizzes' })
export class Quiz {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
