/**
 * @jest-environment ./prisma/prisma-test-environment.ts
 */

import request from 'supertest';

import app from '@app/app';

describe('Update user controller', () => {
  it('should be able to update the user', async () => {
    const user = await request(app).post('/users').send({
      name: 'John Doe',
      email: 'john@doe.com',
      password: '12345678',
      location: 'Somewhere Over the Rainbow',
      avatar: 'avatar.png',
    });

    const response = await request(app)
      .put(`/users/profile/${user.body.value.user.id}`)
      .set('Authorization', `Bearer ${user.body.value.token}`)
      .send({
        name: 'John Doe 2',
        password: '123123123',
        location: 'Somewhere Over the Sky',
      });

    expect(response.status).toBe(200);
    expect(response.body.error).toBeFalsy();
  });
});
