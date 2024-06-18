export class User {
  constructor(
    public id: number,
    public username: string,
    public email: string,
    public createdAt: Date,
    public updatedAt: Date,
    public hash: string,
    public hashedRt: string,
  ) {}
}
