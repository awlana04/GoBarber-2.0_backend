import Name from '../modules/name';
import Description from '../modules/description';
import Prop from '../modules/prop';

export type BarberProps = {
  name: string;
  location: string;
  description: string;
  images?: string[];
  openAtNight: boolean;
  openOnWeekends: boolean;
  userId: string;
};

export type BarberValidationProps = {
  name: Name;
  location: Prop;
  description: Description;
  images?: string[];
  openAtNight: boolean;
  openOnWeekends: boolean;
  userId: string;
};

export type UpdateBarberProps = {
  name?: string;
  location?: string;
  description?: string;
  openAtNight?: boolean;
  openOnWeekends?: boolean;
};

export type UpdateBarberPassword = {
  password: string;
};
