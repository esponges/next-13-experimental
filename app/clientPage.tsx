'use client';

import Head from "./head";

export default function ClientPage({
  children,
}: {
  children: React.ReactNode;
}) {
  // this logs in the client
  console.log('rendering client page');
  return (
    <div id='with-font-container'>
      {children}
    </div>
  );
}
