import { User } from '@/features/user/domain/user.entity';
import { auth } from '@/shared/data/network/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export const firebaseAuthApi = {
  async loginWithGoogle(): Promise<User> {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });

    const response = await signInWithPopup(auth, provider);

    const { user } = response;
    return {
      name: user.displayName ?? '',
      email: user.email ?? '',
      photoURL: user.photoURL ?? '',
    };
  },
};
