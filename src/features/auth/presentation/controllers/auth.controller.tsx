import { authService } from '../../data/auth.repository.impl';
export const useAuthLoginWithGoogle = () => {
  const login = async () => {
    try {
      return await authService.loginWithGoogle();
    } catch (e) {
      console.log(e);
    }
  };

  return { login };
};
