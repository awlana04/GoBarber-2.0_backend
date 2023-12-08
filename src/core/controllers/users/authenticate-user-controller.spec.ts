/**
 * @jest-environment ./prisma/prisma-test-environment.ts
 */

import request from 'supertest';

import app from '@app/app';

describe('Authenticate user controller', () => {
  it('should be able to authenticate an user', async () => {
    await request(app).post('/users').send({
      name: 'John Doe',
      email: 'john@doe.com',
      password: '12345678',
      location: 'Somewhere Over the Rainbow',
      avatar: 'avatar.png',
    });

    const response = await request(app).post('/users/session').send({
      email: 'john@doe.com',
      password: '12345678',
    });

    expect(response.status).toBe(200);
    expect(response.body.error).toBeFalsy();
  });
});
