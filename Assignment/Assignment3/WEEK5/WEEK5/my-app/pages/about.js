import styles from '@/styles/Home.module.css';

export default function About() {
  return (
    <div className={styles['header']}>
      <img
        className={styles['factory']}
        src="https://images.squarespace-cdn.com/content/v1/5d0c2baf9970180001430ae5/1561742109446-AB3ML09HDCI9XPV7V8ZD/UNADJUSTEDNONRAW_thumb_2c8.jpg"
        alt="Factory Image"
      />
      <p className={styles['greeting']}>
        Joe's Factory is your neighborhood treasure trove, offering an extensive
        array of essential items that cater to the everyday needs of our
        community. From state-of-the-art laptops to stylish t-shirts, premium
        shampoos, and a diverse assortment of random items, we've carefully
        curated a selection that reflects the diverse requirements of our
        neighbors. At Joe's Factory, we understand that convenience and
        accessibility are key, and we take pride in being the go-to destination
        for those seeking a one-stop shop for life's necessities. Our commitment
        to quality, affordability, and customer satisfaction shines through in
        every product we offer. We're here to simplify your shopping experience
        by providing a wide range of products all under one roof. Whether it's a
        tech upgrade, a wardrobe refresh, or everyday essentials, Joe's Factory
        has you covered with a neighborly touch. Shop with us, and discover the
        convenience of finding everything you need in one place.
      </p>
    </div>
  );
}
