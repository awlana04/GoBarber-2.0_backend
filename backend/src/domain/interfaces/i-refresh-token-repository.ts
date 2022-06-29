import IRefreshToken from '@core/interfaces/i-refresh-token';

import ICreateRefreshTokenDTO from '@dtos/i-create-refresh-token-dto';

type BatchPayload = {
  count: number;
};

export default interface IRefreshTokenRepository {
  findByRefreshToken(id: string): Promise<IRefreshToken | null>;
  save(data: ICreateRefreshTokenDTO): Promise<IRefreshToken>;
  deletePastRefreshToken(userId: string): Promise<BatchPayload>;
}
