import Prop from './prop';

describe('Prop entity domain', () => {
  it('should be able to create a new prop', () => {
    const prop = 'username prop';

    const response = Prop.create(prop) as Prop;

    expect(response.value).toEqual(prop);
    expect(response).toBeInstanceOf(Prop);
  });
});
