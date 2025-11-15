import React from 'react';
import { IonBadge, IonButton, IonIcon } from '@ionic/react';
import { cartOutline } from 'ionicons/icons';
import { useCart } from '../context/CartContext';
import { useHistory } from 'react-router-dom';
import './CartButton.css';

const CartButton: React.FC = () => {
  const { obtenerCantidadTotal, obtenerTotal } = useCart();
  const history = useHistory();
  const cantidad = obtenerCantidadTotal();
  const total = obtenerTotal();

  const handleClick = () => {
    history.push('/cart');
  };

  return (
    <IonButton onClick={handleClick} className="cart-button">
      <IonIcon icon={cartOutline} />
      {cantidad > 0 && (
        <IonBadge color="danger" className="cart-badge">
          {cantidad}
        </IonBadge>
      )}
      {total > 0 && <span className="cart-total">${total.toFixed(2)}</span>}
    </IonButton>
  );
};

export default CartButton;
