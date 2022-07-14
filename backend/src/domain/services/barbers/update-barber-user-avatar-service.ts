import IBarberRepository from '@interfaces/i-barber-repository';
import IBarbersUsecase from '@usecases/models/i-barbers-usecase';

import IBarber from '@core/interfaces/i-barber';

interface IUpdateBarberUserServiceRequest {
  id: string;
  avatar: string;
}

export default class UpdateBarberUserAvatarService {
  constructor(
    private readonly barbersRepository: IBarberRepository,
    private readonly barbersUsecase: IBarbersUsecase
  ) {}

  public async handle({
    id,
    avatar,
  }: IUpdateBarberUserServiceRequest): Promise<IBarber> {
    await this.barbersUsecase.checkBarberDoesNotExists(id);

    const barber = await this.barbersRepository.updateAvatar(id, avatar);

    return barber;
  }
}
