import type { AppProps } from 'next/app';
import { CustomPage } from '../src/shared/interfaces/page.interface';
import LayoutAuthComponent from '../src/shared/presentation/components/templates/LayoutAuthComponent';
import LayoutComponent from '../src/shared/presentation/components/templates/LayoutComponent';
import '../styles/globals.css';

type CustomAppProps = AppProps & {
  Component: CustomPage;
};

export default function App({ Component, pageProps }: CustomAppProps) {
  const Layout = Component.useAuthLayout
    ? LayoutAuthComponent
    : LayoutComponent;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
