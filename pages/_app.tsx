import AuthContextProvider from '@/features/auth/presentation/contexts/AuthContext';
import { CustomPage } from '@/shared/interfaces/page.interface';
import Layout from '@/shared/presentation/components/templates/Layout';
import type { AppProps } from 'next/app';
import PrivateLayout from '../src/shared/presentation/components/templates/PrivateLayout';
import '../styles/globals.css';

type CustomAppProps = AppProps & {
  Component: CustomPage;
};

export default function App({ Component, pageProps }: CustomAppProps) {
  const DynamicLayout = Component.usePrivateLayout ? PrivateLayout : Layout;

  return (
    <AuthContextProvider>
      <DynamicLayout>
        <Component {...pageProps} />
      </DynamicLayout>
    </AuthContextProvider>
  );
}
