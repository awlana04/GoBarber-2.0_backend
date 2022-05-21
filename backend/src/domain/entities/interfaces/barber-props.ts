import Prop from '../domain/prop';
import Name from '../domain/name';

export type BarberProps = {
  name: string;
  location: string;
  description: string;
  images?: string[];
  openAtNight: boolean;
  openOnWeekends: boolean;
  userId: string;
  appointmentId?: string[];
};

export type BarberValidationProps = {
  name: Name;
  location: string;
  description: Prop;
  images?: string[];
  openAtNight: boolean;
  openOnWeekends: boolean;
  userId: string;
  appointmentId?: string[];
};

export type UpdateBarberProps = {
  name?: string;
  description?: string;
  openAtNight?: boolean;
  openOnWeekends?: boolean;
};
