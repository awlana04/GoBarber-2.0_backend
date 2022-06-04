import IBarberRepository from '@interfaces/i-barber-repository';
import IBarbersUsecase from '@usecases/models/i-barbers-usecase';

import Barber from '@entities/barber';

interface IUpdateBarberUserServiceRequest {
  id: string;
  userId: string;
  avatar: string;
}

export default class UpdateBarberUserAvatarService {
  constructor(
    private readonly barbersRepository: IBarberRepository,
    private readonly barbersUsecase: IBarbersUsecase
  ) {}

  public async handle({
    id,
    userId,
    avatar,
  }: IUpdateBarberUserServiceRequest): Promise<Barber> {
    await this.barbersUsecase.checkUserExists(userId);
    await this.barbersUsecase.checkBarberDoesNotExists(id);

    const barber = await this.barbersRepository.updateAvatar(
      id,
      userId,
      avatar
    );

    return barber;
  }
}
