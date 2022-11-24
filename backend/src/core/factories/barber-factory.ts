import BarberRepository from '@repositories/barber-repository';
import BarbersUsecase from '@usecases/implementations/barber-usecase';

import CreateBarberService from '@services/barbers/create-barber-service';
import ViewBarberProfileService from '@services/barbers/view-barber-profile-service';
import GetAllBarbersService from '@services/barbers/get-all-barbers-service';
import UpdateBarberService from '@services/barbers/update-barber-service';
import UpdateBarberUserPasswordService from '@services/barbers/update-barber-user-password-service';
import UpdateBarberUserAvatarService from '@services/barbers/update-barber-user-avatar-service';
import DeleteBarberService from '@services/barbers/delete-barber-service';

const CreateBarberFactory = () => {
  const barberRepository = new BarberRepository();
  const barberUsecase = new BarbersUsecase(barberRepository);

  const createBarberService = new CreateBarberService(
    barberRepository,
    barberUsecase
  );

  const viewBarberProfileService = new ViewBarberProfileService(
    barberRepository
  );

  const getAllBarbersService = new GetAllBarbersService(
    barberRepository,
    barberUsecase
  );

  const updateBarberService = new UpdateBarberService(
    barberRepository,
    barberUsecase
  );

  const updateBarberUserPasswordService = new UpdateBarberUserPasswordService(
    barberRepository,
    barberUsecase
  );

  const updateBarberUserAvatarService = new UpdateBarberUserAvatarService(
    barberRepository,
    barberUsecase
  );

  const deleteBarberService = new DeleteBarberService(
    barberRepository,
    barberUsecase
  );

  return {
    createBarberService,
    viewBarberProfileService,
    getAllBarbersService,
    updateBarberService,
    updateBarberUserPasswordService,
    updateBarberUserAvatarService,
    deleteBarberService,
  };
};

export default CreateBarberFactory;
