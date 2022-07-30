import HttpRequest from '@app/ports/http-request';
import HttpResponse from '@app/ports/http-response';
import HttpNextFunction from '@app/ports/http-next-function';

import CreateUserFactory from '@core/factories/user-factory';

export default class AuthenticateUserController {
  public async execute(
    request: HttpRequest,
    response: HttpResponse,
    next: HttpNextFunction
  ): Promise<HttpResponse> {
    const { authenticateUserService } = CreateUserFactory();

    const { email, password } = request.body;

    try {
      const user = await authenticateUserService.handle({ email, password });

      return response.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
}
