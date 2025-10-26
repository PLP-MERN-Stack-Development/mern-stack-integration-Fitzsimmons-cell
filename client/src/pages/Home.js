import React, { useEffect, useState } from 'react';
import API from '../services/api';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await API.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>All Products</h1>
      {products.length > 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {products.map((product) => (
            <div
              key={product._id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '10px',
                width: '200px',
              }}
            >
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default Home;
