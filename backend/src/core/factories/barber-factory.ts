import BarberRepository from '@repositories/barber-repository';
import BarbersUsecase from '@usecases/implementations/barber-usecase';

import CreateBarberService from '@services/barbers/create-barber-service';

const CreateBarberFactory = () => {
  const barberRepository = new BarberRepository();
  const barberUsecase = new BarbersUsecase(barberRepository);

  return new CreateBarberService(barberRepository, barberUsecase);
};

export default CreateBarberFactory;
