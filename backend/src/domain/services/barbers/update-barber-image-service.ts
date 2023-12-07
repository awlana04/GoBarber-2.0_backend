import IBarberRepository from '@interfaces/i-barber-repository';
import IBarberUsecase from '@usecases/models/i-barbers-usecase';
import IDiskStorageAdapter from '@adapters/models/i-disk-storage-adapter';

import IBarber from '@core/interfaces/i-barber';

interface IUpdateBarberImageServiceRequest {
  id: string;
  images: string[];
}

export default class UpdateBarberImageService {
  constructor(
    private barberRepository: IBarberRepository,
    private barberUsecase: IBarberUsecase,
    private diskStorageAdapter: IDiskStorageAdapter,
  ) {}

  public async handle({
    id,
    images,
  }: IUpdateBarberImageServiceRequest): Promise<IBarber> {
    await this.barberUsecase.checkBarberDoesNotExists(id);

    images.map(image => {
      const filename = this.diskStorageAdapter.saveFile(image);

      return filename;
    });

    const barber = await this.barberRepository.updateImages(id, images);

    return barber;
  }
}
