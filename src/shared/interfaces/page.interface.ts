import { NextPage } from 'next';

export type CustomPage = NextPage & { usePrivateLayout?: boolean };
