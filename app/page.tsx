import Head from 'next/head';
import ClientComponent from './clientComponent';
import ServerComponent from './serverComponent';

// app/page.tsx
export default function Home() {
  return (
    <div className='bg-black text-3xl'>
      <ClientComponent>
        {/* this error is a known next13 bug https://github.com/vercel/next.js/issues/42292 */}
        {/* @ts-expect-error Server Component */}
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
