import crypto from 'crypto';

import Barber from './barber';

describe('Barber entity', () => {
  const name = 'John Doe Barber';
  const location = 'Somewhere Into the Pocket';
  const description = 'A Really Good Place';
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
    expect(response.props.description).toEqual(description);
    expect(response.props.openAtNight).toEqual(openAtNight);
    expect(response.props.openOnWeekends).toEqual(openOnWeekends);
    expect(response.props.userId).toEqual(userId);

    expect(response).toBeInstanceOf(Barber);
  });

  it('should be able to update the barber name', async () => {
    const updatedName = 'John Doe Barber';

    const response = (await Barber.update({
      name: updatedName,
    }).value) as Barber;

    expect(response.name.value).toEqual(updatedName);
  });
});
