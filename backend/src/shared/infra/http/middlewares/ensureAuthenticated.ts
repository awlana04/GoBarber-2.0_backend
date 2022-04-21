import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import AppError from '../../../errors/AppError';

interface TokenPayload {
  id: String;
  iat: Number;
  exp: Number;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    const { authorization } = request.headers;

    if (!authorization) {
      throw new AppError('You are not authorized');
    }

    const token = authorization.replace('Bearer', ' ').trim();

    const data = jwt.verify(token, process.env.SECRET);

    const { id } = data as unknown as TokenPayload;

    request.userId = id;

    return next();
  } catch (error) {
    return response.status(401).json(error);
  }
}
