import crypto from 'crypto';

import Barber from './barber';

describe('Barber entity', () => {
  it('should be able to update the barber name', () => {
    const name = 'John Doe Barber';

    const response = Barber.update({
      name,
    }).value as Barber;

    expect(response.name.value).toEqual(name);
  });

  it('should be able to update the barber description', () => {
    const description = 'This is a really good place, please believe me :)';

    const response = Barber.update({ description }).value as Barber;

    expect(response.description.value).toEqual(description);
  });

  it('should be able to create a new barber', () => {
    const name = 'John Doe Barber';
    const location = 'Somewhere Into the Pocket';
    const description = 'This is a really good place, please believe me :)';
    const openAtNight = true;
    const openOnWeekends = true;
    const userId = crypto.randomUUID();

    const response = Barber.create({
      name,
      location,
      description,
      openAtNight,
      openOnWeekends,
      userId,
    }).value as Barber;

    expect(response.name.value).toEqual(name);
    expect(response.props.location).toEqual(location);
    expect(response.description.value).toEqual(description);
    expect(response.props.openAtNight).toEqual(openAtNight);
    expect(response.props.openOnWeekends).toEqual(openOnWeekends);
    expect(response.props.userId).toEqual(userId);

    expect(response).toBeInstanceOf(Barber);
  });
});
