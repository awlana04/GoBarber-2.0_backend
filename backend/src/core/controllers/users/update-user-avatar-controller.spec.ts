/**
 * @jest-environment ./prisma/prisma-test-environment.ts
 */

import request from 'supertest';

import app from '@app/app';

describe('Update user avatar controller', () => {
  it('should be able to update the user avatar', async () => {
    const user = await request(app).post('/users').send({
      name: 'John Doe',
      email: 'john@doe.com',
      password: '12345678',
      location: 'Somewhere Over the Rainbow',
      avatar: 'avatar.png',
    });

    const response = await request(app)
      .patch(`/users/profile/avatar/${user.body.value.user.id}`)
      .set('Authorization', `Bearer ${user.body.value.token}`)
      .send({
        avatar: 'other-avatar.png',
      });

    expect(response.status).toBe(200);
    expect(response.body.error).toBeFalsy();
  });
});
