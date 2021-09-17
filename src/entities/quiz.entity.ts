import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('user', { schema: 'users' })
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

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
