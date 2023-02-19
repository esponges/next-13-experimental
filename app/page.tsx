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
        <ServerPage />
      </ClientPage>
    </>
  );
}
