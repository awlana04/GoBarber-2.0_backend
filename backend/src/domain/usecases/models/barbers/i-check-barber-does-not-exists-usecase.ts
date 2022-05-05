import Barber from '@entities/barber';

export default interface ICheckBarberDoesNotExists {
  run(id: string): Promise<Barber | null>;
}
