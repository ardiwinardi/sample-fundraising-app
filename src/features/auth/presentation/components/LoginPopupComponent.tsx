import ButtonComponent from '@/shared/presentation/components/atomics/ButtonComponent';
import PopupComponent, {
  GeneralPopupProps,
} from '@/shared/presentation/components/molecules/PopupComponent';
import { useRouter } from 'next/router';

type Props = GeneralPopupProps;

export default function LoginPopupComponent(props: Props) {
  const router = useRouter();
  const handleLogin = () => {
    props.handleClose();
    router.push('/donate/1');
  };
  return (
    <PopupComponent
      id="login"
      show={props.show}
      handleClose={() => props.handleClose()}
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

        <ButtonComponent
          widthType="full"
          heightType="sm"
          onClick={() => handleLogin()}
        >
          Login
        </ButtonComponent>
        <div className="flex flex-row justify-between space-x-4 items-center mt-6">
          <button
            type="button"
            className="text-white flex-1 bg-[#3b5998] hover:bg-[#3b5998]/90 focus:outline-none font-medium rounded-full text-sm px-5 py-2 text-center inline-flex items-center"
          >
            <svg
              className="mr-2 -ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="facebook-f"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
              ></path>
            </svg>
            Facebook
          </button>

          <button
            type="button"
            className="text-white flex-1 bg-[#4285F4] hover:bg-[#4285F4]/90 focus:outline-none font-medium rounded-full text-sm px-5 py-2 text-center inline-flex items-center"
          >
            <svg
              className="mr-2 -ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Google
          </button>
        </div>
      </form>
    </PopupComponent>
  );
}
