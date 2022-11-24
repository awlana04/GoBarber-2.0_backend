/**
 * @jest-environment ./prisma/prisma-test-environment.ts
 */

import request from 'supertest';
import app from '@app/app';

describe('Delete barber controller', () => {
  it('should be able to delete a barber', async () => {
    const user = await request(app).post('/users').send({
      name: 'Awlana Costa',
      email: 'cawlana040@gmail.com',
      password: '12345678',
      location: 'Somewhere Over the Rainbow',
      avatar: 'avatar.png',
    });

    const barber = await request(app)
      .post(`/barbers/${user.body.value.user.id}`)
      .set('Authorization', `Bearer ${user.body.value.token}`)
      .send({
        name: 'John Doe Barber',
        location: 'Somewhere Over the Pocket',
        description: 'This is a really good place, please believe me :)',
        images: 'image01.png',
        openAtNight: true,
        openOnWeekends: true,
        userId: user.body.value.user.id,
      });

    const response = await request(app)
      .delete(`/barbers/${barber.body.value.id}`)
      .set('Authorization', `Bearer ${user.body.value.token}`);

    expect(response.status).toBe(200);
    expect(response.body.error).toBeFalsy();
  });
});
