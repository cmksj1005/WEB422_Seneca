import Link from 'next/link';
import { useAtom } from 'jotai';
import { cartListAtom } from '@/store'; // used in /pages/products/[id].js

export async function getStaticPaths() {
  let pathList = [];

  // pre-render and support product/1 through product/30 only
  for (let i = 0; i < 30; i++) {
    pathList.push({ params: { id: i.toString() } });
  }

  return {
    paths: pathList,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const res = await fetch(
    `https://fakestoreapi.com/products/${context.params.id}`
  );
  const data = await res.json();

  return { props: { staticProduct: data } };
}

export default function Product(props) {
  const { staticProduct } = props;

  const [cartList, setCartList] = useAtom(cartListAtom);

  function addToCart(product) {
    setCartList([...cartList, product]);
  }

  return (
    <>
      <h3>{staticProduct.title}</h3>
      <img src={staticProduct.image} style={{ maxWidth: '300px' }} />
      <br />
      <br />
      {staticProduct.description}
      <br />
      <br />
      <strong>Id:</strong> {staticProduct.id}
      <br />
      <strong>Rate:</strong> {staticProduct.rating.rate} <br />
      <strong>Count:</strong> {staticProduct.rating.count} <br />
      <strong>Category:</strong> {staticProduct.category}
      <br />
      <br />
      <strong>${staticProduct.price.toFixed(2)}</strong>
      <br />
      <br />
      <Link href="/products">
        <button>Back to Product List</button>
      </Link>
      &nbsp;&nbsp;
      <button onClick={(e) => addToCart(staticProduct)}>Add to Cart</button>
    </>
  );
}
