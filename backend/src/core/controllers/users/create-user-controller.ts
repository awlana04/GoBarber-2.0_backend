import HttpRequest from '@ports/http-request';
import HttpResponse from '@ports/http-response';

import CreateUserFactory from '@core/factories/user-factory';

export default class CreateUserController {
  public async execute(
    request: HttpRequest,
    response: HttpResponse
  ): Promise<HttpResponse> {
    const createUser = CreateUserFactory();

    const { name, email, password, location } = request.body;

    const avatar = request.file.filename;

    try {
      const user = await createUser.handle({
        name,
        email,
        password,
        location,
        avatar,
      });

      return response.status(201).json(user);
    } catch (error) {
      return response.json(error);
    }
  }
}
