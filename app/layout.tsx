"use client";

import SessionProvider from '@/components/session/sessionProvider';
import { useRouter } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <html className='bg-blue'>
      <head />
      <body>
        <button onClick={() => router.push('/about')}>About</button>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
