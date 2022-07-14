import HttpRequest from '@ports/http-request';
import HttpResponse from '@ports/http-response';
import HttpNextFunction from '@ports/http-next-function';

import CreateUserFactory from '@core/factories/user-factory';

export default class CreateUserController {
  public async execute(
    request: HttpRequest,
    response: HttpResponse,
    next: HttpNextFunction
  ): Promise<HttpResponse> {
    const createUserService = CreateUserFactory();

    if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'e2e') {
      const { name, email, password, location, avatar } = request.body;

      try {
        const user = await createUserService.handle({
          name,
          email,
          password,
          location,
          avatar,
        });

        return response.status(201).json(user);
      } catch (error) {
        next(error);
      }
    }

    if (process.env.NODE_ENV === 'dev') {
      const { name, email, password, location } = request.body;

      const avatar = request.file.filename;

      try {
        const user = await createUserService.handle({
          name,
          email,
          password,
          location,
          avatar,
        });

        return response.status(201).json(user);
      } catch (error) {
        next(error);
      }
    }
  }
}
