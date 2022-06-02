import Name from '../domain/name';
import Email from '../domain/email';
import Password from '../domain/password';
import Prop from '../domain/prop';

export type UserProps = {
  name: string;
  email: string;
  password: string;
  location: string;
  avatar?: string;
  refreshTokenId?: string;
  barberId?: string;
  appointmentId?: string[];
};

export type UserValidationProps = {
  name: Name;
  email: Email;
  password: Password;
  location: Prop;
  avatar?: string;
  refreshTokenId?: string;
  barberId?: string;
  appointmentId?: string[];
};

export type UpdateUserProps = {
  name?: string;
  password?: string;
  location?: string;
};
