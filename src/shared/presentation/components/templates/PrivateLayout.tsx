import { AuthContext } from '@/features/auth/presentation/contexts/AuthContext';
import { ReactNode, useContext } from 'react';
import { Loading } from '../atoms/Loading';
import Layout from './Layout';

type Props = {
  children: ReactNode;
};

export default function PrivateLayout(props: Props) {
  const { user } = useContext(AuthContext);
  // const router = useRouter();

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (!user) {
  //       router.push('/');
  //     }
  //   }, 300);
  // }, [user]);

  return <Layout>{user ? props.children : <Loading />}</Layout>;
}
