import Prop from '../modules/prop';

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
