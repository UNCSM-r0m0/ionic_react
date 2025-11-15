import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  IonContent,
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
  IonImg,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonLabel,
  IonItem,
  IonButtons,
  IonBackButton
} from '@ionic/react';
import { arrowBack, addOutline, removeOutline, cartOutline } from 'ionicons/icons';
import { useCart, Producto } from '../context/CartContext';
import productosData from '../data/productos.json';
import categoriasData from '../data/categorias.json';
import './ProductDetail.css';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const { agregarAlCarrito, items, actualizarCantidad } = useCart();
  const [producto, setProducto] = useState<Producto | null>(null);
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    const productoEncontrado = productosData.find((p: Producto) => p.id === parseInt(id));
    if (productoEncontrado) {
      setProducto(productoEncontrado);
    }
  }, [id]);

  if (!producto) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Producto no encontrado</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div className="error-container">
            <p>El producto que buscas no existe.</p>
            <IonButton onClick={() => history.push('/home')}>Volver al inicio</IonButton>
          </div>
        </IonContent>
      </IonPage>
    );
  }

  const categoria = categoriasData.find(c => c.id === producto.categoriaId);
  const itemEnCarrito = items.find((item) => item.producto.id === producto.id);
  const cantidadEnCarrito = itemEnCarrito?.cantidad || 0;

  const handleAgregarAlCarrito = () => {
    agregarAlCarrito(producto, cantidad);
  };

  const handleIncrementar = () => {
    setCantidad(cantidad + 1);
  };

  const handleDecrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>{producto.nombre}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="product-detail-container">
          <div className="product-detail-grid">
            {/* Imagen del producto */}
            <div className="product-image-section">
              <IonCard className="image-card">
                <IonImg
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="product-detail-image"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/500x500/CCCCCC/666666?text=Sin+Imagen';
                  }}
                />
              </IonCard>
            </div>

            {/* Información del producto */}
            <div className="product-info-section">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle className="product-title">{producto.nombre}</IonCardTitle>
                  {categoria && (
                    <IonLabel color="medium" className="product-category">
                      {categoria.nombre}
                    </IonLabel>
                  )}
                </IonCardHeader>
                <IonCardContent>
                  <div className="product-price-section">
                    <span className="product-price">${producto.precio.toFixed(2)}</span>
                    {producto.stock && (
                      <span className="product-stock">
                        {producto.stock > 0 ? `Stock: ${producto.stock}` : 'Agotado'}
                      </span>
                    )}
                  </div>

                  <div className="product-description-section">
                    <h3>Descripción</h3>
                    <p>{producto.descripcion}</p>
                  </div>

                  {/* Selector de cantidad */}
                  <div className="quantity-section">
                    <IonLabel>Cantidad:</IonLabel>
                    <div className="quantity-controls">
                      <IonButton fill="outline" onClick={handleDecrementar} disabled={cantidad <= 1}>
                        <IonIcon icon={removeOutline} />
                      </IonButton>
                      <span className="quantity-display">{cantidad}</span>
                      <IonButton fill="outline" onClick={handleIncrementar}>
                        <IonIcon icon={addOutline} />
                      </IonButton>
                    </div>
                  </div>

                  {/* Botón agregar al carrito */}
                  {cantidadEnCarrito === 0 ? (
                    <IonButton
                      expand="block"
                      color="primary"
                      onClick={handleAgregarAlCarrito}
                      className="add-to-cart-button"
                    >
                      <IonIcon icon={cartOutline} slot="start" />
                      Añadir al carrito
                    </IonButton>
                  ) : (
                    <div className="cart-status">
                      <IonItem lines="none">
                        <IonLabel>
                          <h3>Ya en el carrito: {cantidadEnCarrito} unidad(es)</h3>
                        </IonLabel>
                        <IonButton
                          fill="outline"
                          onClick={() => actualizarCantidad(producto.id, cantidadEnCarrito + cantidad)}
                        >
                          Agregar {cantidad} más
                        </IonButton>
                      </IonItem>
                    </div>
                  )}
                </IonCardContent>
              </IonCard>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ProductDetail;

