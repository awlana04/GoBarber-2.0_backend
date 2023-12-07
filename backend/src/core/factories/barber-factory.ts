import BarberRepository from '@repositories/barber-repository';
import BarbersUsecase from '@usecases/implementations/barber-usecase';
import HashAdapter from '@adapters/implementations/hash-adapter';
import DiskStorageAdapter from '@adapters/implementations/disk-storage-adapter';

import CreateBarberService from '@services/barbers/create-barber-service';
import ViewBarberProfileService from '@services/barbers/view-barber-profile-service';
import GetAllBarbersService from '@services/barbers/get-all-barbers-service';
import UpdateBarberService from '@services/barbers/update-barber-service';
import UpdateBarberUserPasswordService from '@services/barbers/update-barber-user-password-service';
import UpdateBarberUserAvatarService from '@services/barbers/update-barber-user-avatar-service';
import UpdateBarberImageService from '@services/barbers/update-barber-image-service';
import DeleteBarberService from '@services/barbers/delete-barber-service';

const CreateBarberFactory = () => {
  const barberRepository = new BarberRepository();
  const barberUsecase = new BarbersUsecase(barberRepository);
  const hashAdapter = new HashAdapter();
  const diskStorageAdapter = new DiskStorageAdapter();

  const createBarberService = new CreateBarberService(
    barberRepository,
    barberUsecase,
  );

  const viewBarberProfileService = new ViewBarberProfileService(
    barberRepository,
  );

  const getAllBarbersService = new GetAllBarbersService(
    barberRepository,
    barberUsecase,
  );

  const updateBarberService = new UpdateBarberService(
    barberRepository,
    barberUsecase,
  );

  const updateBarberUserPasswordService = new UpdateBarberUserPasswordService(
    barberRepository,
    barberUsecase,
    hashAdapter,
  );

  const updateBarberUserAvatarService = new UpdateBarberUserAvatarService(
    barberRepository,
    barberUsecase,
    diskStorageAdapter,
  );

  const updateBarberImageService = new UpdateBarberImageService(
    barberRepository,
    barberUsecase,
    diskStorageAdapter,
  );

  const deleteBarberService = new DeleteBarberService(
    barberRepository,
    barberUsecase,
  );

  return {
    createBarberService,
    viewBarberProfileService,
    getAllBarbersService,
    updateBarberService,
    updateBarberUserPasswordService,
    updateBarberUserAvatarService,
    updateBarberImageService,
    deleteBarberService,
  };
};

export default CreateBarberFactory;
