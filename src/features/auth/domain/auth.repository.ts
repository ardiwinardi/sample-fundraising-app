import { User } from '../../user/domain/user.entity';
import {
  ForgotPasswordRequest,
  LoginRequest,
  ResendPasswordRequest,
  ResetPasswordRequest,
} from '../data/auth.request';
import { Auth } from './auth.entity';

export interface AuthRepository {
  login(request: LoginRequest): Promise<Auth>;
  loginWithGoogle(): Promise<User>;
  refreshToken(refreshToken: string): Promise<Auth>;
  resetPassword(request: ResetPasswordRequest): Promise<void>;
  forgotPassword(request: ForgotPasswordRequest): Promise<void>;
  resendPassword(request: ResendPasswordRequest): Promise<void>;
  revalidate(): Promise<Partial<User>>;
}
