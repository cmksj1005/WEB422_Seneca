import Link from 'next/link';
import { useAtom } from 'jotai';
import { cartListAtom } from '@/store'; // used in /components/ProductBox.js
export default function ProductBox(props) {
  const { product } = props;
  const [cartList, setCartList] = useAtom(cartListAtom);

  function addToCart(product) {
    setCartList([...cartList, product]);
  }

  return (
    <div style={{ margin: '30px', flexGrow: '1' }}>
      <div style={{ maxWidth: '300px' }}>
        <h3>{product.title}</h3>
        <img src={product.image} style={{ maxWidth: '300px' }} />
        <br />
        <br />
        {product.description}
        <br />
        <br />
        <strong>${product.price.toFixed(2)}</strong>
        <br />
        <br />
        <Link href={`/products/${product.id}`}>
          <button>View Details</button>
        </Link>
        &nbsp;&nbsp;
        <button onClick={(e) => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}
