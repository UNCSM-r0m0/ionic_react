import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import CartButton from './CartButton';
import './Navbar.css';

const Navbar: React.FC = () => {
  const history = useHistory();

  return (
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle onClick={() => history.push('/home')} style={{ cursor: 'pointer' }}>
          Atléticos Nicas
        </IonTitle>
        <IonButtons slot="end">
          <IonButton onClick={() => history.push('/about')}>
            Acerca de
          </IonButton>
          <CartButton />
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Navbar;

