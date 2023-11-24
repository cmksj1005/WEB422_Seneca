import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Modal = () => {
  const router = useRouter();

  useEffect(() => {
    // Retrieve data passed from the previous page
    const selectedProduct = router.query.product; // Adjust the query parameter based on your implementation
    // Use the selected product data to display in the modal
    console.log('Selected Product:', selectedProduct);
  }, [router]);

  return (
    <div>
      {/* Modal content */}
      <h1>Modal Content</h1>
      {/* Display the modal content using the selectedProduct data */}
    </div>
  );
};

export default Modal;
