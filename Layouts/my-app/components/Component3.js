import { useAtom } from 'jotai';
import { countAtom } from '@/store';

export default function Component3() {
  const [count, setCount] = useAtom(countAtom);
  return <>Value: {count}</>;
}
