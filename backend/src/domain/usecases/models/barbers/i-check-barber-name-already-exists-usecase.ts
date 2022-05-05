import Barber from '@entities/barber';

export default interface ICheckBarberNameAlreadyExistsUsecase {
  run(name: string): Promise<Barber | null>;
}
