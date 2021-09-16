import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('user', { schema: 'users' })
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;
}
