import BarberRepository from '@repositories/barber-repository';
import BarbersUsecase from '@usecases/implementations/barber-usecase';

import CreateBarberService from '@services/barbers/create-barber-service';
import ViewBarberProfileService from '@services/barbers/view-barber-profile-service';

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

  return { createBarberService, viewBarberProfileService };
};

export default CreateBarberFactory;
