import SessionProvider from '@/components/session/sessionProvider';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

/* 
  This is the root component of your app but it doesn't
  works in the app directory. It works in the pages directory only.
*/

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
