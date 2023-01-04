import AuthContextProvider from '@/features/auth/presentation/contexts/AuthContext';
import { CustomPage } from '@/shared/interfaces/page.interface';
import Layout from '@/shared/presentation/components/templates/Layout';
import { setupStore } from '@/shared/presentation/redux/store';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import PrivateLayout from '../src/shared/presentation/components/templates/PrivateLayout';
import '../styles/globals.css';

type CustomAppProps = AppProps & {
  Component: CustomPage;
};

const store = setupStore();

export default function App({ Component, pageProps }: CustomAppProps) {
  const DynamicLayout = Component.usePrivateLayout ? PrivateLayout : Layout;

  useEffect(() => {
    if (process.env.NODE_ENV === 'development')
      document.body.classList.add('debug-screens');
  }, []);

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
