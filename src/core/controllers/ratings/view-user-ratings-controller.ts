import HttpRequest from '@ports/http-request';
import HttpResponse from '@ports/http-response';
import HttpNextFunction from '@ports/http-next-function';

import CreateRatingFactory from '@core/factories/rating-factory';

export default class ViewUserRatingsController {
  public async execute(
    request: HttpRequest,
    response: HttpResponse,
    next: HttpNextFunction,
  ): Promise<HttpResponse> {
    const { viewUserRatingsService } = CreateRatingFactory();

    const { userId } = request.params;

    try {
      const rating = await viewUserRatingsService.handle(userId);

      return response.json(rating);
    } catch (error) {
      next(error);
    }
  }
}
