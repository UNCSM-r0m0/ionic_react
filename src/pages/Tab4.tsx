import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/react';
import ProductCard from '../components/ProductCard';
import { Producto } from '../context/CartContext';
import productosData from '../data/productos.json';
import categoriasData from '../data/categorias.json';
import './Tab4.css';

const Tab4: React.FC = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const categoria = categoriasData.find(c => c.id === 4);

  useEffect(() => {
    const productosCategoria = productosData.filter((p: Producto) => p.categoriaId === 4);
    setProductos(productosCategoria);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{categoria?.nombre || 'Accesorios'}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{categoria?.nombre || 'Accesorios'}</IonTitle>
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

export default Tab4;

