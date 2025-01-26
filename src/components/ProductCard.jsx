import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ title, image, price, description }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p className="price">${price}</p>
      <p className="description">{description}</p>
    </div>
  );
};

export default ProductCard;