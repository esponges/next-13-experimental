'use client';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { increment } from '@/store/counterSlice';
import { useRouter } from 'next/navigation';

export default function ClientPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch<AppDispatch>();
  const count = useSelector((state: RootState) => state.counter.value);
  const router = useRouter();

  const handleIncrementCounter = () => {
    dispatch(increment());
    router.refresh();
  };

  // this logs in the client
  return (
    <div id='with-font-container'>
      {/* count display */}
      <p>Current Count: {count}</p>
      <button onClick={handleIncrementCounter}>Increment Count</button>
      {children}
    </div>
  );
}
