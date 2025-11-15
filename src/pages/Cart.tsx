import React from 'react';
import { IonContent, IonPage, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonImg, IonButton, IonIcon, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import { addOutline, removeOutline, trashOutline } from 'ionicons/icons';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import './Cart.css';

const Cart: React.FC = () => {
  const { items, actualizarCantidad, eliminarDelCarrito, obtenerTotal, limpiarCarrito } = useCart();
  const total = obtenerTotal();

  return (
    <IonPage>
      <Navbar />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Carrito de Compras</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="cart-container">
          {items.length === 0 ? (
            <IonCard>
              <IonCardContent>
                <p className="empty-cart">Tu carrito está vacío</p>
              </IonCardContent>
            </IonCard>
          ) : (
            <>
              <IonList>
                {items.map((item) => (
                  <IonItem key={item.producto.id} className="cart-item">
                    <IonImg src={item.producto.imagen} alt={item.producto.nombre} className="cart-item-image" slot="start" />
                    <IonLabel>
                      <h2>{item.producto.nombre}</h2>
                      <p>${item.producto.precio.toFixed(2)} c/u</p>
                    </IonLabel>
                    <div className="cart-item-controls" slot="end">
                      <IonButton size="small" fill="clear" onClick={() => actualizarCantidad(item.producto.id, item.cantidad - 1)}>
                        <IonIcon icon={removeOutline} />
                      </IonButton>
                      <span className="cart-quantity">{item.cantidad}</span>
                      <IonButton size="small" fill="clear" onClick={() => actualizarCantidad(item.producto.id, item.cantidad + 1)}>
                        <IonIcon icon={addOutline} />
                      </IonButton>
                      <IonButton size="small" fill="clear" color="danger" onClick={() => eliminarDelCarrito(item.producto.id)}>
                        <IonIcon icon={trashOutline} />
                      </IonButton>
                    </div>
                  </IonItem>
                ))}
              </IonList>

              <IonCard className="cart-summary">
                <IonCardHeader>
                  <IonCardTitle>Resumen</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <div className="summary-row">
                    <span>Total:</span>
                    <span className="total-amount">${total.toFixed(2)}</span>
                  </div>
                  <IonButton expand="block" color="primary" className="checkout-button">
                    Proceder al Pago
                  </IonButton>
                  <IonButton expand="block" fill="outline" onClick={limpiarCarrito}>
                    Limpiar Carrito
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Cart;

