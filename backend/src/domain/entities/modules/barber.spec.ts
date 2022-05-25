import crypto from 'crypto';

import Barber from './barber';

describe('Barber entity', () => {
  const name = 'John Doe Barber';
  const location = 'Somewhere Into the Pocket';
  const description = 'This is a really good place, please believe me :)';
  const openAtNight = true;
  const openOnWeekends = true;
  const userId = crypto.randomUUID();

  it('should NOT be able to create a barber with an invalid name (too few characters)', () => {
    const invalidName = 'a';

    const response = Barber.create({
      name: invalidName,
      location,
      description,
      openAtNight,
      openOnWeekends,
      userId,
    }).value as Error;

    expect(response.name).toEqual('InvalidNameError');
    expect(response.message).toEqual('Invalid name: ' + invalidName + '.');
  });

  it('should NOT be able to create a new barber with an invalid name (too many characters)', () => {
    // const invalidName =
    //   'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';

    const invalidName = 'a'.repeat(129);

    const response = Barber.create({
      name: invalidName,
      location,
      description,
      openAtNight,
      openOnWeekends,
      userId,
    }).value as Error;

    expect(response.name).toEqual('InvalidNameError');
    expect(response.message).toEqual('Invalid name: ' + invalidName + '.');
  });

  it('should be able to create a new barber', () => {
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

  it('should not be able to update the barber with invalid name (too few characters)', () => {
    const invalidName = 'a';

    const response = Barber.update({
      name: invalidName,
    }).value as Error;

    expect(response.name).toEqual('InvalidNameError');
    expect(response.message).toEqual('Invalid name: ' + invalidName + '.');
  });

  it('should not be able to update the barber with invalid nane (too many characters)', () => {
    const invalidName = 'aaa'.repeat(128);

    const response = Barber.update({ name: invalidName }).value as Error;

    expect(response.name).toEqual('InvalidNameError');
    expect(response.message).toEqual('Invalid name: ' + invalidName + '.');
  });

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
});
