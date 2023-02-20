import Head from 'next/head';
import ClientPage from './clientPage';
import ServerPage from './serverPage';

// app/page.tsx
export default function Home() {
  // logs in the server
  console.log('rendering home page');

  return (
    <>
      <ClientPage>
        {/* this error is a known next13 bug https://github.com/vercel/next.js/issues/42292 */}
        {/* @ts-expect-error Server Component */}
        <ServerPage />
      </ClientPage>
    </>
  );
}
