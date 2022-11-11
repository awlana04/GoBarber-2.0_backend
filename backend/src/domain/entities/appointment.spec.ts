import crypto from 'crypto';

import Appointment from './appointment';

describe('appointment entity', () => {
  const date = new Date();
  const userId = crypto.randomUUID();
  const barberId = crypto.randomUUID();

  const response = Appointment.create({
    date,
    userId,
    barberId,
  }).value as Appointment;

  it('should be able to create a new appointment', () => {
    expect(response.date).toEqual(date);
    expect(response.userId.value).toEqual(userId);
    expect(response.barberId.value).toEqual(barberId);

    expect(response).toBeInstanceOf(Appointment);
  });

  it('should be able to update an appointment', () => {
    const date = new Date();

    const response = Appointment.update({ date }).value as Appointment;

    expect(response.date).toEqual(date);
  });
});
