import { User } from '@/features/user/domain/entities/user.entity';
import { Auth } from '../../domain/entities/auth.entity';
import { firebaseAuthApi } from '../network/firebase-auth.api';
import {
  ForgotPasswordRequest,
  LoginRequest,
  ResendPasswordRequest,
  ResetPasswordRequest,
} from '../requests/auth.request';
import { AuthRepository } from './../../domain/repositories/auth.repository';
class AuthRepositoryImpl implements AuthRepository {
  login(request: LoginRequest): Promise<Auth> {
    throw new Error('Method not implemented.');
  }
  loginWithGoogle(): Promise<User> {
    return firebaseAuthApi.loginWithGoogle();
  }
  refreshToken(refreshToken: string): Promise<Auth> {
    throw new Error('Method not implemented.');
  }
  resetPassword(request: ResetPasswordRequest): Promise<void> {
    throw new Error('Method not implemented.');
  }
  forgotPassword(request: ForgotPasswordRequest): Promise<void> {
    throw new Error('Method not implemented.');
  }
  resendPassword(request: ResendPasswordRequest): Promise<void> {
    throw new Error('Method not implemented.');
  }
  revalidate(): Promise<Partial<User>> {
    throw new Error('Method not implemented.');
  }
}

export const authService = Object.freeze(new AuthRepositoryImpl());
