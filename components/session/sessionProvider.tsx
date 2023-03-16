"use client";

import { store } from '@/store';
import { Provider } from 'react-redux';

/* 
  Provides a context for the root of the app to access the session data
  regardless if it's in the app directory or the pages directory.
*/

export default function SessionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
