import AuthContextProvider from '@/features/auth/presentation/contexts/AuthContext';
import { CustomPage } from '@/shared/interfaces/page.interface';
import Layout from '@/shared/presentation/components/templates/Layout';
import { store } from '@/shared/presentation/redux/store';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import PrivateLayout from '../src/shared/presentation/components/templates/PrivateLayout';
import '../styles/globals.css';

type CustomAppProps = AppProps & {
  Component: CustomPage;
};

export default function App({ Component, pageProps }: CustomAppProps) {
  const DynamicLayout = Component.usePrivateLayout ? PrivateLayout : Layout;

  return (
    <Provider store={store}>
      <AuthContextProvider>
        <DynamicLayout>
          <Toaster />
          <Component {...pageProps} />
        </DynamicLayout>
      </AuthContextProvider>
    </Provider>
  );
}
