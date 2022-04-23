import ViewBarberProfileService from '../services/ViewBarberProfileService';
import GetAllBarbersService from '../services/GetAllBarbersService';
import CreateBarberService from '../services/CreateBarberService';
import UpdateBarberService from '../services/UpdateBarberService';
import UpdateBarberPasswordService from '../services/UpdateBarberPasswordService';
import UpdateBarberAvatarService from '../services/UpdateBarberAvatarService';
import DeleteBarberService from '../services/DeleteBarberService';
import DeleteBarberAndAppointmentService from '../services/DeleteBarberAndAppointmentService';

import BarberRepository from '../infra/prisma/repositories/BarberRepository';
import DiskStorageProvider from '../../../shared/providers/implementations/DiskSotrageProvider';
import BCryptHashProvider from '../../users/providers/implementations/BCryptHashProvider';

const barberRepository = new BarberRepository();
const diskStorage = new DiskStorageProvider();
const hashProvider = new BCryptHashProvider();

const viewBarberProfileService = new ViewBarberProfileService(barberRepository);
const getAllBarbersService = new GetAllBarbersService(barberRepository);
const createBarberService = new CreateBarberService(barberRepository);
const updateBarberService = new UpdateBarberService(barberRepository);

const updateBarberPasswordService = new UpdateBarberPasswordService(
  barberRepository,
  hashProvider
);

const updateBarberAvatarService = new UpdateBarberAvatarService(
  barberRepository,
  diskStorage
);

const deleteBarberService = new DeleteBarberService(
  barberRepository,
  diskStorage
);

const deleteBarberAndAppointmentService = new DeleteBarberAndAppointmentService(
  barberRepository
);

export {
  viewBarberProfileService,
  getAllBarbersService,
  createBarberService,
  updateBarberService,
  updateBarberPasswordService,
  updateBarberAvatarService,
  deleteBarberService,
  deleteBarberAndAppointmentService,
};
