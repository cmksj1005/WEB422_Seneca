import Link from 'next/link';
import { useAtom } from 'jotai';
import { cartListAtom } from '@/store';
import Logo from '@/components/Logo';
import styles from '@/styles/Home.module.css';
import { useRouter } from 'next/router';

export default function Layout(props) {
  //const router = useRouter();
  //router.push('/'); // navigate to the home route "/"
  const [cartList, setCartList] = useAtom(cartListAtom);
  return (
    <>
      <div className={styles['header']}>
        <Logo />
        <div className={styles['title']}>
          <h1>Joe's Facroty</h1>
          <Link href="/">Home</Link> | <Link href="/about">About</Link> |{' '}
          <Link href="/products">Products</Link> |{' '}
          <Link href="/cart">
            Shopping Cart <span>({cartList.length})</span>
          </Link>
        </div>
      </div>
      <hr />
      <br />
      {props.children}
      <br />
    </>
  );
}
