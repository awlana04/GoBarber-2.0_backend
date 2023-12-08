/**
 * @jest-environment ./prisma/prisma-test-environment.ts
 */

import request from 'supertest';

import app from '@app/app';

describe('Create refresh token controller', () => {
  it('should  be able to create a new refresh token', async () => {
    const user = await request(app).post('/users').send({
      name: 'Awlana Costa',
      email: 'cawlana040@gmail.com',
      password: '12345678',
      location: 'Somewhere Over the Rainbow',
      avatar: 'avatar.png',
    });

    const response = await request(app).post('/refresh-tokens').send({
      refresh_token: user.body.value.refreshToken.id,
    });

    expect(response.status).toBe(201);
    expect(response.body.error).toBeFalsy();
  });
});
