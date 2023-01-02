import Button from '@/shared/presentation/components/atoms/Button';
import FacebookButton from '@/shared/presentation/components/atoms/FacebookButton';
import GoogleButton from '@/shared/presentation/components/atoms/GoogleButton';
import Popup from '@/shared/presentation/components/atoms/Popup';
import useModal from '@/shared/presentation/hooks/useModal';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useLoginWithGoogleMutation } from '../../controllers/auth.controller';

export default function LoginPopup() {
  const { modalStatus, toggleModal: handleClose } = useModal('LOGIN_POPUP');

  const [loginWithGoogle, result] = useLoginWithGoogleMutation();
  const router = useRouter();

  const handleLogin = () => {
    handleClose();
    router.push('/donate/1');
  };

  const handleLoginWithGoogle = async () => {
    loginWithGoogle();
  };

  useEffect(() => {
    if (result.isSuccess) {
      handleClose();
    }
  }, [result.isSuccess]);

  return (
    <Popup
      id="login"
      show={modalStatus}
      handleClose={() => handleClose()}
      closeOnTapOutside={false}
    >
      <form>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="email"
            name="username"
            id="floating_username"
            className="block pt-2 pb-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-primary/20 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_username"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Username
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="password"
            name="floating_password"
            id="floating_password"
            className="block pt-2 pb-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-primary/20 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>

        <Button widthType="full" heightType="sm" onClick={handleLogin}>
          Login
        </Button>
        <div className="flex flex-row justify-between space-x-4 items-center mt-6">
          <FacebookButton widthType="full" />

          <GoogleButton widthType="full" onClick={handleLoginWithGoogle} />
        </div>
      </form>
    </Popup>
  );
}
