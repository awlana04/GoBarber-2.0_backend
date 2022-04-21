export default interface ICreateBarberDTO {
  name: string;
  location: string;
  description: string;
  images?: Array<string>;
  openAtNight: boolean;
  openOnWeekends: boolean;
  userId: string;
}
