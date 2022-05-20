export default class Prop {
  public readonly value: string;

  private constructor(item: string) {
    this.value = item;
  }

  get item() {
    return this.value;
  }

  public static create(item: string) {
    return new Prop(item);
  }
}
