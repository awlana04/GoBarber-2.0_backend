import crypto from 'crypto';

import Appointment from './appointment';

describe('appointment entity', () => {
  const date = new Date();
  const userId = crypto.randomUUID();
  const barberId = crypto.randomUUID();

  it('should be able to create a new appointment', () => {
    const response = Appointment.create({
      date,
      userId,
      barberId,
    }).value as Appointment;

    expect(response.date).toEqual(date);
    expect(response.userId.value).toEqual(userId);
    expect(response.barberId.value).toEqual(barberId);

    expect(response).toBeInstanceOf(Appointment);
  });
});
