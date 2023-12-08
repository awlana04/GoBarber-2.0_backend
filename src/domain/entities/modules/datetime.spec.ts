import Datetime from './datetime';

describe('Datime value object', () => {
  it('should not be able to create a new date with invalid date', () => {
    const invalidDate = new Date(2022, 8, 13);

    const response = Datetime.create(invalidDate).value as Error;

    expect(response.name).toEqual('InvalidDatetimeError');
    expect(response.message).toEqual('Invalid datetime: ' + invalidDate + '.');
  });

  it('should be able to create a new date', () => {
    const date = new Date();

    const response = Datetime.create(date).value as Datetime;

    expect(response.value).toEqual(date);
    expect(response).toBeInstanceOf(Datetime);
  });
});
