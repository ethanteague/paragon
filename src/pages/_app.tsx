import { AppProps } from 'next/app';

import Layout from '../templates/Layout';
import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
