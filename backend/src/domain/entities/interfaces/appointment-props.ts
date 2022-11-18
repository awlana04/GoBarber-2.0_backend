import Datetime from '../modules/datetime';
import Prop from '../modules/prop';

export type AppointmentProps = {
  date: Date;
  userId: string;
  barberId: string;
};

export type AppointmentValidationProps = {
  date: Datetime;
  userId: Prop;
  barberId: Prop;
};

export type UpdateAppointmentProps = {
  date: Date;
};
