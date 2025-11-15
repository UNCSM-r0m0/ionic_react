import React, { useEffect, useState } from 'react';
import { IonContent, IonPage, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import { Producto } from '../context/CartContext';
import productosData from '../data/productos.json';
import './Home.css';

const Home: React.FC = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [productosFiltrados, setProductosFiltrados] = useState<Producto[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setProductos(productosData as Producto[]);
    setProductosFiltrados(productosData as Producto[]);
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setProductosFiltrados(productos);
    } else {
      const termino = searchTerm.toLowerCase();
      const filtrados = productos.filter(
        (p) =>
          p.nombre.toLowerCase().includes(termino) ||
          p.descripcion.toLowerCase().includes(termino)
      );
      setProductosFiltrados(filtrados);
    }
  }, [searchTerm, productos]);

  return (
    <IonPage>
      <Navbar />
      <IonContent fullscreen className="home-content">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Productos</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <div className="home-wrapper">
          <div className="home-container">
            <SearchBar value={searchTerm} onSearchChange={setSearchTerm} />

            {productosFiltrados.length === 0 ? (
              <div className="no-results">
                <p>No se encontraron productos que coincidan con tu búsqueda.</p>
              </div>
            ) : (
              <div className="products-grid">
                {productosFiltrados.map((producto) => (
                  <ProductCard key={producto.id} producto={producto} />
                ))}
              </div>
            )}
          </div>

          <Footer />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;

