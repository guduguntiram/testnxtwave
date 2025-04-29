import React, { useEffect, useState } from 'react';
import './ProductList.css';
import { FaShoppingCart, FaTag } from 'react-icons/fa';
import { MdOutlineCategory } from 'react-icons/md';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load products. Please try again.');
        setLoading(false);
      });
  }, []);

  return (
    <div className="product-page">
      <header className="product-header">
        <FaShoppingCart className="product-header__icon" />
        <h1 className="product-header__title">Our Featured Products</h1>
        <p className="product-header__subtitle">Explore handpicked items just for you.</p>
      </header>

      {loading ? (
        <p className="product-loading">Loading products...</p>
      ) : error ? (
        <p className="product-error">{error}</p>
      ) : (
        <div className="product-list">
          {products.map(product => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image}
                alt={product.title || 'Product Image'}
                className="product-card__img"
              />
              <h2 className="product-card__title">{product.title}</h2>
              <div className="product-card__meta">
                <span className="product-card__category">
                  <MdOutlineCategory /> {product.category}
                </span>
                <span className="product-card__price">
                  <FaTag /> ${product.price}
                </span>
              </div>
              <button className="product-card__btn">
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
