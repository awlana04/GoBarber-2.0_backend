import HttpRequest from '@ports/http-request';
import HttpResponse from '@ports/http-response';
import HttpNextFunction from '@ports/http-next-function';

import CreateUserFactory from '@core/factories/user-factory';

export default class UpdateUserController {
  public async execute(
    request: HttpRequest,
    response: HttpResponse,
    next: HttpNextFunction
  ): Promise<HttpResponse> {
    const { updateUserService } = CreateUserFactory();

    const { id } = request.params;

    const { name, password, location } = request.body;

    try {
      const user = await updateUserService.handle({
        id,
        name,
        password,
        location,
      });

      return response.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
}
