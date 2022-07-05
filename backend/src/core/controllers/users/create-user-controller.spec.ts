/**
 * @jest-environment ./prisma/prisma-test-environment.ts
 */

import app from '@app/app';
import request from 'supertest';

describe('Create user controller', () => {
  it('should be able to create a new user', async () => {
    const response = await request(app).post('/users').send({
      name: 'Awlana Costa',
      email: 'cawlana040@gmail.com',
      password: '12345678',
      location: 'Somewhere Over the Rainbow',
      avatar: 'avatar.png',
    });

    expect(response.status).toBe(201);
    expect(response.body.error).toBeFalsy();
  });
});
