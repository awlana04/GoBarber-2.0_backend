type IUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  location: string;
  avatar: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export default IUser;
