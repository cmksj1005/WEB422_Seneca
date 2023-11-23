import styles from '@/styles/Home.module.css'; // Use a relative path

export default function Logo() {
  return (
    <img src="/images/logo.png" alt="Logo Image" className={styles['logo']} />
  );
}
