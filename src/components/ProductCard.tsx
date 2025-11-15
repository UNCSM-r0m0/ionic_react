import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonImg, IonButton, IonIcon } from '@ionic/react';
import { addOutline, removeOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import { useCart, Producto } from '../context/CartContext';
import './ProductCard.css';

interface ProductCardProps {
  producto: Producto;
}

const ProductCard: React.FC<ProductCardProps> = ({ producto }) => {
  const { agregarAlCarrito, items, actualizarCantidad } = useCart();
  const history = useHistory();
  
  const itemEnCarrito = items.find((item) => item.producto.id === producto.id);
  const cantidadEnCarrito = itemEnCarrito?.cantidad || 0;

  const handleImageClick = () => {
    history.push(`/product/${producto.id}`);
  };

  const handleAgregar = (e: React.MouseEvent) => {
    e.stopPropagation();
    agregarAlCarrito(producto, 1);
  };

  const handleIncrementar = (e: React.MouseEvent) => {
    e.stopPropagation();
    actualizarCantidad(producto.id, cantidadEnCarrito + 1);
  };

  const handleDecrementar = (e: React.MouseEvent) => {
    e.stopPropagation();
    actualizarCantidad(producto.id, cantidadEnCarrito - 1);
  };

  return (
    <IonCard className="product-card">
      <div className="product-image-wrapper" onClick={handleImageClick} style={{ cursor: 'pointer' }}>
        <IonImg 
          src={producto.imagen} 
          alt={producto.nombre} 
          className="product-image"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://via.placeholder.com/300x300/CCCCCC/666666?text=Sin+Imagen';
          }}
        />
      </div>
      <IonCardHeader>
        <IonCardTitle>{producto.nombre}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p className="product-description">{producto.descripcion}</p>
        <div className="product-footer">
          <span className="product-price">${producto.precio.toFixed(2)}</span>
          {cantidadEnCarrito === 0 ? (
            <IonButton size="small" onClick={handleAgregar} color="primary">
              Agregar
            </IonButton>
          ) : (
            <div className="quantity-controls">
              <IonButton size="small" fill="clear" onClick={handleDecrementar}>
                <IonIcon icon={removeOutline} />
              </IonButton>
              <span className="quantity">{cantidadEnCarrito}</span>
              <IonButton size="small" fill="clear" onClick={handleIncrementar}>
                <IonIcon icon={addOutline} />
              </IonButton>
            </div>
          )}
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default ProductCard;

