export class Response<T> {
  code: number;
  data: T;

  constructor(data: T, code?: number) {
    this.code = code ? code : 200;
    this.data = data;
  }
}
