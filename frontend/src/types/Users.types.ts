export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  createdAt: string;
}

export interface UserRegisterPayload {
  email: string;
  password: string;
  username: string;
}

export interface UserLoginPayload {
  email: string;
  password: string;
}

export interface UserSession {
  id: number;
  username: string;
  email: string;
  createdAt: string;
}
