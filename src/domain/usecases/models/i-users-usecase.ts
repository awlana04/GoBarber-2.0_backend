import IUser from '@core/interfaces/i-user';

export default interface IUsersUsecase {
  checkUserAlreadyExists(email: string): Promise<IUser | null>;
  checkUserDoesNotExists(id: string): Promise<IUser | null>;
}
