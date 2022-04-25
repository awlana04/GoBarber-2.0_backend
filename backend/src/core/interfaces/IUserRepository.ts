import User from '../../domain/entities/user';

export default interface IUserRepository {
  findByEmail(email: string): Promise<User | null>;
}
