/**
 * @jest-environment ./prisma/prisma-test-environment.ts
 */

import request from 'supertest';

import app from '@app/app';

describe('View barber profile controller', () => {
  it('should be able to view barber profile', async () => {
    const user = await request(app).post('/users').send({
      name: 'John Doe',
      email: 'john@doe.com',
      password: '12345678',
      location: 'Somewhere Over the Rainbow',
      avatar: 'avatar.png',
    });

    const barber = await request(app)
      .post(`/barbers/${user.body.value.user.id}`)
      .set('Authorization', `Bearer ${user.body.value.token}`)
      .send({
        name: 'John Doe Barber',
        location: 'Hell street',
        description: 'A really good place to be aaaaaaaaaaaaaaaaaaa',
        images: ['barber.png'],
        openAtNight: true,
        openOnWeekends: true,
      });

    const response = await request(app)
      .get(`/barbers/profile/${barber.body.value.id}`)
      .set('Authorization', `Bearer ${user.body.value.token}`);

    expect(response.status).toBe(200);
    expect(response.body.error).toBeFalsy();
  });
});
