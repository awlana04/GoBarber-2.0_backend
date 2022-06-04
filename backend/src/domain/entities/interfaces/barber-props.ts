import Name from '../domain/name';
import Description from '../domain/description';
import Prop from '../domain/prop';

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
