import HttpRequest from '@ports/http-request';
import HttpResponse from '@ports/http-response';
import HttpNextFunction from '@ports/http-next-function';

import CreateUserFactory from '@core/factories/user-factory';

export default class DeleteUserController {
  public async execute(
    request: HttpRequest,
    response: HttpResponse,
    next: HttpNextFunction
  ): Promise<HttpResponse> {
    const { deleteUserService } = CreateUserFactory();

    const { id } = request.params;

    try {
      const user = await deleteUserService.handle(id);

      return response.json(user);
    } catch (error) {
      next(error);
    }
  }
}
