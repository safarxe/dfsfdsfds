import { useState, useEffect } from 'react';
import axios from 'axios';

function Detail() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div>
      <h1>Product Details</h1>
      <div>
        {products.map(product => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button>View More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Detail;
