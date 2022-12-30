/* eslint-disable @typescript-eslint/no-unused-vars */

import { User } from '@/features/user/domain/user.entity';
import { Auth } from '../domain/auth.entity';
import { AuthRepository } from '../domain/auth.repository';
import { firebaseAuthApi } from './auth-firebase.api';
import {
  ForgotPasswordRequest,
  LoginRequest,
  ResendPasswordRequest,
  ResetPasswordRequest,
} from './auth.request';

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
