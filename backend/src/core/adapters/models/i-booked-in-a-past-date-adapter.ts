export default interface IBookedInAPastDateAdapter {
  checkDate(date: Date): Promise<any>;
}
