import IBarberRepository from '@interfaces/i-barber-repository';

import Barber from '@entities/barber';

import IBarbersUsecase from '@usecases/models/i-barbers-usecase';

interface IUpdateBarberUserServiceRequest {
  id: string;
  userId: string;
  avatar: string;
}

export default class UpdateBarberUserAvatarService {
  constructor(
    private barbersRepository: IBarberRepository,
    private barbersUsecase: IBarbersUsecase
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
