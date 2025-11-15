import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/react';
import ProductCard from '../components/ProductCard';
import { Producto } from '../context/CartContext';
import productosData from '../data/productos.json';
import categoriasData from '../data/categorias.json';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const categoria = categoriasData.find(c => c.id === 1);

  useEffect(() => {
    const productosCategoria = productosData.filter((p: Producto) => p.categoriaId === 1);
    setProductos(productosCategoria);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{categoria?.nombre || 'Camisetas'}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{categoria?.nombre || 'Camisetas'}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="products-container">
          <IonGrid>
            <IonRow>
              {productos.map((producto) => (
                <IonCol size="12" sizeMd="6" sizeLg="4" key={producto.id}>
                  <ProductCard producto={producto} />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
