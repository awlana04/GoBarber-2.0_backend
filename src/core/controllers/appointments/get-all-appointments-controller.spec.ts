/**
 * @jest-environment ./prisma/prisma-test-environment.ts
 */

import request from 'supertest';
import app from '@app/app';

describe('Get all appointments controller', () => {
  it('should be able to get all appointments', async () => {
    const user = await request(app).post('/users').send({
      name: 'John Doe',
      email: 'john@doe.com',
      password: '12345678',
      location: 'Somewhere Over the Rainbow',
      avatar: 'avatar.png',
    });

    const user2 = await request(app).post('/users').send({
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
        location: 'Hell Street',
        description: 'This is a really good place, please believe me :)',
        images: ['barber.png'],
        openAtNight: true,
        openOnWeekends: true,
        userId: user.body.value.user.id,
      });

    const appointment = await request(app)
      .post(`/appointments/${barber.body.value.id}`)
      .set('Authorization', `Bearer ${user2.body.value.token}`)
      .send({
        date: new Date(),
        userId: user2.body.value.user.id,
        barberId: barber.body.value.id,
      });

    console.log(barber.body.value, appointment.body.value);

    const response = await request(app)
      .get(`/appointments/all/${barber.body.value.id}`)
      .set('Authorization', `Bearer ${user.body.value.token}`);

    console.log(response.body.value);

    expect(response.status).toBe(200);
    expect(response.body.error).toBeFalsy();
  });
});
