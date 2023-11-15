import { useContext } from 'react';
import { SetCountContext } from '@/pages/_app';

export default function ComponentC() {
  const setCount = useContext(SetCountContext);
  return (
    <button onClick={(e) => setCount((n) => n + 1)}>Increase Value</button>
  );
}
