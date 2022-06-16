import crypto from 'crypto';

import Rating from './rating';

describe('Rating entity', () => {
  it('should be able to update the rating comment', () => {
    const comment =
      'It was a good place, but they cut down a tree. They hate the nature. I hated it! But its a good barber.';

    const response = Rating.update({ comment }).value as Rating;

    expect(response.comment.value).toEqual(comment);
  });
  it('should be able to update the rating', () => {
    const stars = 4;
    const comment =
      'It was a good place, but they cut down a tree. They hate the nature. I hated it! But its a good barber.';

    const response = Rating.update({ stars, comment }).value as Rating;

    expect(response.stars).toEqual(stars);
    expect(response.comment.value).toEqual(comment);
  });

  it('should be able to create a new rating', () => {
    const stars = 5;
    const comment =
      'A very good place, this is my fifth time comming back here. A really peace and profissioanl barber.';
    const userId = crypto.randomUUID();
    const barberId = crypto.randomUUID();

    const response = Rating.create({
      stars,
      comment,
      userId,
      barberId,
    }).value as Rating;

    expect(response.props.stars).toEqual(stars);
    expect(response.comment.value).toEqual(comment);
    expect(response.props.userId).toEqual(userId);
    expect(response.props.barberId).toEqual(barberId);

    expect(response).toBeInstanceOf(Rating);
  });
});
