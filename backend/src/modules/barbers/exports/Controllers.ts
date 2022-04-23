import ViewBarberProfileController from '../infra/http/controllers/ViewBarberProfileController';
import GetAllBarbersController from '../infra/http/controllers/GetAllBarbersController';
import CreateBarberController from '../infra/http/controllers/CreateBarberController';
import UpdateBarberController from '../infra/http/controllers/UpdateBarberController';
import UpdateBarberPasswordController from '../infra/http/controllers/UpdateBarberPasswordController';
import UpdateBarberAvatarController from '../infra/http/controllers/UpdateBarberAvatarController';
import DeleteBarberController from '../infra/http/controllers/DeleteBarberController';
import DeleteBarberAndAppointmentController from '../infra/http/controllers/DeleteBarberAndAppointmentController';

import {
  viewBarberProfileService,
  getAllBarbersService,
  createBarberService,
  updateBarberService,
  updateBarberPasswordService,
  updateBarberAvatarService,
  deleteBarberService,
  deleteBarberAndAppointmentService,
} from './Services';

const viewBarberProfile = new ViewBarberProfileController(
  viewBarberProfileService
);

const getAllBarbers = new GetAllBarbersController(getAllBarbersService);
const createBarber = new CreateBarberController(createBarberService);
const updateBarber = new UpdateBarberController(updateBarberService);

const updateBarberPassword = new UpdateBarberPasswordController(
  updateBarberPasswordService
);

const updateBarberAvatar = new UpdateBarberAvatarController(
  updateBarberAvatarService
);

const deleteBarber = new DeleteBarberController(deleteBarberService);

const deleteBarberAndAppointment = new DeleteBarberAndAppointmentController(
  deleteBarberAndAppointmentService
);

export {
  viewBarberProfile,
  getAllBarbers,
  createBarber,
  updateBarber,
  updateBarberPassword,
  updateBarberAvatar,
  deleteBarber,
  deleteBarberAndAppointment,
};
