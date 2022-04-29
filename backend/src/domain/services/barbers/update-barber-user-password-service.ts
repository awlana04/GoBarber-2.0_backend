import IBarberRepository from '../../interfaces/IBarberRepository';

import Barber from '../../entities/modules/barber';
import User from '../../entities/modules/user';

interface IUpdateBarberUserPasswordServiceRequest {
  id: string;
  password: string;
}

export default class UpdateBarberUserPassword {
  constructor(private barberRepository: IBarberRepository) {}

  public async handle({
    id,
    password,
  }: IUpdateBarberUserPasswordServiceRequest): Promise<Barber & User> {
    const user = await this.barberRepository.findUserId(id);

    if (!user) {
      throw new Error('User does not exists');
    }

    if (!user.props.barberId) {
      throw new Error('Barber does not exists');
    }

    const barber = await this.barberRepository.updatePassword(id, password);

    return barber;
  }
}
