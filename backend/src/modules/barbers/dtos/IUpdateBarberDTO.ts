export default interface IUpdateBarberDTO {
  name?: string;
  location?: string;
  description?: string;
  images?: Array<string>;
  openAtNight?: boolean;
  openOnWeekends?: boolean;
}
