import Prop from '../domain/prop';

export type AppointmentProps = {
  date: Date;
  userId: string;
  barberId: string;
};

export type AppointmentValidationProps = {
  date: Date;
  userId: Prop;
  barberId: Prop;
};

export type UpdateAppointmentProps = {
  date: Date;
};
