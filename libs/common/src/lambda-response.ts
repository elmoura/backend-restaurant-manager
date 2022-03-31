export class LambdaResponse<ResponseType> {
  public statusCode: number;

  public readonly body: string;

  constructor(props: { statusCode: number; body: ResponseType }) {
    this.statusCode = props.statusCode;
    this.body = JSON.stringify(props.body);
  }
}
