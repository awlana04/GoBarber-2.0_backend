import HttpRequest from '@app/ports/http-request';
import HttpResponse from '@app/ports/http-response';
import HttpNextFunction from '@app/ports/http-next-function';

import CreateRefreshToken from '@core/factories/refresh-token-factory';

export default class CreateRefreshTokenController {
  public async execute(
    request: HttpRequest,
    response: HttpResponse,
    next: HttpNextFunction
  ): Promise<HttpResponse> {
    const createRefreshToken = CreateRefreshToken();

    const { refresh_token } = request.body;

    try {
      const refreshToken = await createRefreshToken.handle({
        id: refresh_token,
      });

      return response.status(201).json(refreshToken);
    } catch (error) {
      next(error);
    }
  }
}
