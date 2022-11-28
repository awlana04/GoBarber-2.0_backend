import IBarberRepository from '@interfaces/i-barber-repository';
import IBarbersUsecase from '@usecases/models/i-barbers-usecase';
import IDiskStorageAdapter from '@adapters/models/i-disk-storage-adapter';

import IBarber from '@core/interfaces/i-barber';

interface IUpdateBarberUserServiceRequest {
  id: string;
  avatar: string;
}

export default class UpdateBarberUserAvatarService {
  constructor(
    private readonly barbersRepository: IBarberRepository,
    private readonly barbersUsecase: IBarbersUsecase,
    private readonly diskStorageAdapter: IDiskStorageAdapter
  ) {}

  public async handle({
    id,
    avatar,
  }: IUpdateBarberUserServiceRequest): Promise<IBarber> {
    await this.barbersUsecase.checkBarberDoesNotExists(id);

    const filename = await this.diskStorageAdapter.saveFile(avatar);

    const barber = await this.barbersRepository.updateAvatar(id, filename);

    return barber;
  }
}
