import { NextPage } from 'next';

export type CustomPage = NextPage & { useAuthLayout?: boolean };
