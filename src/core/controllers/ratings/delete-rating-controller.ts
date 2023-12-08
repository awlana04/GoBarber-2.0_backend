import HttpRequest from '@ports/http-request';
import HttpResponse from '@ports/http-response';
import HttpNextFunction from '@ports/http-next-function';

import CreateRatingFactory from '@core/factories/rating-factory';

export default class DeleteRatingController {
  public async execute(
    request: HttpRequest,
    response: HttpResponse,
    next: HttpNextFunction,
  ): Promise<HttpResponse> {
    const { deleteRatingService } = CreateRatingFactory();

    const { id } = request.params;

    try {
      const rating = await deleteRatingService.handle(id);

      return response.json(rating);
    } catch (error) {
      next(error);
    }
  }
}
