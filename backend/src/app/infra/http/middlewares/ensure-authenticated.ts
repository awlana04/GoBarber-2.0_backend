import HttpRequest from '@ports/http-request';
import HttpResponse from '@ports/http-response';
import HttpNextFunction from '@ports/http-next-function';

import TokenAdapter from '@adapters/implementations/token-adapter';

interface TokenPayload {
  id: string;
  iat: Number;
  exp: Number;
}

export default async function ensureAuthenticated(
  request: HttpRequest,
  response: HttpResponse,
  next: HttpNextFunction,
) {
  try {
    const tokenAdapter = new TokenAdapter();

    const { authorization } = request.headers;

    const token = authorization.replace('Bearer', ' ').trim();

    const data = await tokenAdapter.verifyToken(token);

    const { id } = data as unknown as TokenPayload;

    request.userId = id;

    return next();
  } catch (error) {
    return response.status(401).json(error);
  }
}
