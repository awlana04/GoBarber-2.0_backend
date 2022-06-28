type IRefreshToken = {
  id: string;
  expiresIn: number;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};

export default IRefreshToken;
