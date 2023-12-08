import Name from '../modules/name';
import Email from '../modules/email';
import Password from '../modules/password';
import Prop from '../modules/prop';

export type UserProps = {
  name: string;
  email: string;
  password: string;
  location: string;
  avatar?: string;
};

export type UserValidationProps = {
  name: Name;
  email: Email;
  password: Password;
  location: Prop;
  avatar?: string;
};

export type UpdateUserProps = {
  name?: string;
  password?: string;
  location?: string;
};
