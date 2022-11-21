import HttpRequest from '@ports/http-request';
import HttpResponse from '@ports/http-response';
import HttpNextFunction from '@ports/http-next-function';

import CreateUserFactory from '@core/factories/user-factory';

export default class ViewUserProfileController {
  public async execute(
    request: HttpRequest,
    response: HttpResponse,
    next: HttpNextFunction
  ): Promise<HttpResponse> {
    const { viewUserProfileService } = CreateUserFactory();

    const { id } = request.params;

    try {
      const user = await viewUserProfileService.handle(id);

      return response.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
}
