export default interface ICreateBarberDTO {
  name: string;
  location: string;
  description: string;
  openAtNight: boolean;
  openOnWeekends: boolean;
  userId: string;
}
