import Main from '@/components/Main';
import styles from '@/styles/Home.module.css';

export default function Hello() {
  return (
    <div className={styles['header']}>
      <Main />
      <p className={styles['greeting']}>
        Welcome to Joe's Factory, your one-stop shop for all your shopping
        needs! Our website offers a diverse and extensive collection of
        products, ranging from fashion and electronics to home decor and more.
        Whether you're looking for the latest fashion trends, high-quality
        gadgets, or unique items to personalize your home, you'll find it all
        here. We take pride in providing an easy and enjoyable shopping
        experience with a user-friendly interface and a secure checkout process.
        With an ever-expanding inventory, competitive prices, and outstanding
        customer service, we're committed to helping you find exactly what
        you're looking for. Explore our virtual aisles, discover fantastic
        deals, and shop with confidence at our online department store. Your
        perfect shopping experience starts here.
      </p>
    </div>
  );
}
