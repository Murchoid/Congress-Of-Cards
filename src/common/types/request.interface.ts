export interface RequestWithUser extends Request {
  user: {
    sub: string;
    email: string;
    username: string
    refreshToken: string;
  };
}