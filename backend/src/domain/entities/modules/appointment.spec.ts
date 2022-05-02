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
    });

    expect(response.props.date).toEqual(date);
    expect(response.props.userId).toEqual(userId);
    expect(response.props.barberId).toEqual(barberId);

    expect(response).toBeInstanceOf(Appointment);
  });
});
