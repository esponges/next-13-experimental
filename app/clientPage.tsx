'use client';

export default function ClientPage({ children }: { children: React.ReactNode }) {
  // this logs in the client
  console.log('rendering client page');
  return <>{children}</>;
}
