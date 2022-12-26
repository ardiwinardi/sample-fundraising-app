import AuthContextProvider from '@/features/auth/presentation/contexts/AuthContext';
import type { AppProps } from 'next/app';
import { CustomPage } from '../src/shared/interfaces/page.interface';
import LayoutComponent from '../src/shared/presentation/components/templates/LayoutComponent';
import PrivateLayoutComponent from '../src/shared/presentation/components/templates/PrivateLayoutComponent';
import '../styles/globals.css';

type CustomAppProps = AppProps & {
  Component: CustomPage;
};

export default function App({ Component, pageProps }: CustomAppProps) {
  const Layout = Component.usePrivateLayout
    ? PrivateLayoutComponent
    : LayoutComponent;

  return (
    <AuthContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  );
}
