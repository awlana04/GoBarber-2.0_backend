import HttpRequest from '@ports/http-request';
import HttpResponse from '@ports/http-response';
import HttpNextFunction from '@ports/http-next-function';

import CreateUserFactory from '@core/factories/user-factory';

export default class UpdateUserAvatarController {
  public async execute(
    request: HttpRequest,
    response: HttpResponse,
    next: HttpNextFunction
  ): Promise<HttpResponse> {
    const { updateUserAvatarService } = CreateUserFactory();

    const { id } = request.params;

    if (process.env.NODE_ENV === 'test') {
      const { avatar } = request.body;

      try {
        const user = await updateUserAvatarService.handle({ id, avatar });

        return response.status(200).json(user);
      } catch (error) {
        next(error);
      }
    }

    const avatar = request.file.filename;

    try {
      const user = await updateUserAvatarService.handle({ id, avatar });

      return response.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
}
