/*import { useRouter } from 'next/router';

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  return <p>Product: {id}</p>
}*/

import { useRouter } from 'next/router'

export default function Products() {
  const router = useRouter()
  const { page } = router.query;
  const { category } = router.query;

  if (page && category) {
    return <p>Products for page: {page} &amp; category: {category}</p>
  } else {
    return <p>Page and/or Category Parameters Missing</p>
  }
}