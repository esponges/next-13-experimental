'use client';

import { useDispatch, useSelector } from 'react-redux';
import Head from './head';
import { AppDispatch, RootState } from '@/store';
import { increment } from '@/store/counterSlice';

export default function ClientPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch<AppDispatch>();
  const count = useSelector((state: RootState) => state.counter.value);

  const handleIncrementCounter = () => {
    dispatch(increment());
  };

  // this logs in the client
  console.log('rendering client page');
  return (
    <div id='with-font-container'>
      {/* count display */}
      <p>Current Count: {count}</p>
      <button onClick={handleIncrementCounter}>Increment Count</button>
      {children}
    </div>
  );
}
