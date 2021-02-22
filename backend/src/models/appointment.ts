import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { uuid }  from 'uuidv4';

@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: String;

  @Column()
  provider: String;

  @Column('time with time zone')
  date: Date;
}

export default Appointment;
