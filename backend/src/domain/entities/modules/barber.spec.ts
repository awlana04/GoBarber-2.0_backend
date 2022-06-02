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

  it('should be able to update the barber location', () => {
    const location = 'Somewhere Over the Heaven';

    const response = Barber.update({ location }).value as Barber;

    expect(response.location).toEqual(location);
  });

  it('should be able to update the barber description', () => {
    const description = 'This is a really good place, please believe me :)';

    const response = Barber.update({ description }).value as Barber;

    expect(response.description.value).toEqual(description);
  });

  it('should be able to update the barber open at night boolean', () => {
    const openAtNight = false;

    const response = Barber.update({ openAtNight }).value as Barber;

    console.log(response);

    expect(response.openAtNight).toEqual(openAtNight);
    expect(response.openAtNight).toBeFalsy();
  });

  it('should be able to update the open on weekends boolean', () => {
    const openOnWeekends = false;

    const response = Barber.update({ openOnWeekends }).value as Barber;

    expect(response.openOnWeekends).toEqual(openOnWeekends);
    expect(response.openOnWeekends).toBeFalsy();
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
