import React from 'react';
import { Producto } from '../context/CartContext';
import ProductCard from './ProductCard';
import './ProductCarousel.css';

interface ProductCarouselProps {
  productos: Producto[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ productos }) => {
  return (
    <div className="product-carousel">
      <div className="carousel-container">
        {productos.map((producto) => (
          <div key={producto.id} className="carousel-item">
            <ProductCard producto={producto} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;

