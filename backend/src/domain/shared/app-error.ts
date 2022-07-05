export default class AppError extends Error {
  public readonly message: string;
  public readonly status: number;

  constructor(message: string, status = 406) {
    super();
    this.message = message;
    this.status = status;
  }
}
