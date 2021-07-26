import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';

import User from './User';
import Image from './Image';

@Entity('barbers')
class Barber {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  name: string;

  @Column()
  location: string;

  @Column()
  description: string;

  @OneToMany(() => Image, image => image.barber, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'barber_id' })
  images: Image;

  @Column()
  open_on_weekends: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Barber;
