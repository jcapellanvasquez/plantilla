export class RequestModel<T> {
  public statusCode: number = 0;
  public message: string = '';
  public data: T;

  constructor(data: T = null) {
    this.data = data;
  }

  getStatusCode(): number {
    return this.statusCode;
  }

  setStatusCode(value: number) {
    this.statusCode = value;
  }

  getMessage(): string {
    return this.message;
  }

  setMessage(value: string) {
    this.message = value;
  }

  getData(): T {
    return this.data;
  }

  setData(value: T) {
    this.data = value;
  }
}
