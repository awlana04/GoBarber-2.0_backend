import IBarberRepository from '../../interfaces/IBarberRepository';

import Barber from '../../entities/modules/barber';

interface IUpdateBarberUserServiceRequest {
  id: string;
  avatar: string;
}

export default class UpdateBarberUserAvatarService {
  constructor(private barbersRepository: IBarberRepository) {}

  public async handle({
    id,
    avatar,
  }: IUpdateBarberUserServiceRequest): Promise<Barber> {
    const user = await this.barbersRepository.findUserId(id);

    if (!user) {
      throw new Error('User does not exists');
    }

    if (!user.props.barberId) {
      throw new Error('Barber does not exists');
    }

    const barber = await this.barbersRepository.updateAvatar(id, avatar);

    return barber;
  }
}
