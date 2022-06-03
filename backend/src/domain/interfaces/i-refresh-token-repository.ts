import RefreshToken from '@entities/refresh-token';

import ICreateRefreshTokenDTO from '../dtos/i-create-refresh-token-dto';

export default interface IRefreshTokenRepository {
  findByRefreshToken(id: string): Promise<RefreshToken | null>;
  save(data: ICreateRefreshTokenDTO): Promise<RefreshToken>;
  deletePastRefreshToken(userId: string): Promise<void>;
}
