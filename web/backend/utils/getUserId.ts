import { verify } from 'jsonwebtoken';

import { createContext as context } from '../context';

interface Token {
  userId: string;
}

export default function getUserId(context) {
  const authHeader = context.request.get('Authorization');

  if (authHeader) {
    const token = authHeader.replace('Bearer', '');

    const verifiedToken = verify(token, process.env.APP_SECRET) as Token;

    return verifiedToken && String(verifiedToken.userId);
  }
}
