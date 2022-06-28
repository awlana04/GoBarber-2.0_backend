import IRefreshToken from '@core/interfaces/i-refresh-token';

import ICreateRefreshTokenDTO from '@dtos/i-create-refresh-token-dto';

import BatchPayload from '@ports/batch-payload';

export default interface IRefreshTokenRepository {
  findByRefreshToken(id: string): Promise<IRefreshToken | null>;
  save(data: ICreateRefreshTokenDTO): Promise<IRefreshToken>;
  deletePastRefreshToken(userId: string): Promise<BatchPayload>;
}
