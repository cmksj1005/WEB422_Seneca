import Link from 'next/link';
import Logo from '@/components/Logo';
import styles from '@/styles/Home.module.css';
import { useRouter } from 'next/router';

export default function Layout(props) {
  //const router = useRouter();
  //router.push('/'); // navigate to the home route "/"
  return (
    <>
      <div className={styles['header']}>
        <Logo />
        <div className={styles['title']}>
          <h1>Joe's Facroty</h1>
          <Link href="/">Home</Link> | <Link href="/about">About</Link> |{' '}
          <Link href="/productdetails">Product Details</Link> |{' '}
          <Link href="/dashboard">Dashboard</Link> |{' '}
          <Link href="/dashboard/preferences">Dashboard Preferences</Link>
        </div>
      </div>
      <hr />
      <br />
      {props.children}
      <br />
    </>
  );
}
