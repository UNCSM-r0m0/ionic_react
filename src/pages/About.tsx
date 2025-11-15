import React from 'react';
import { IonContent, IonPage, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './About.css';

const About: React.FC = () => {
  return (
    <IonPage>
      <Navbar />
      <IonContent fullscreen className="about-content">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Acerca de Nosotros</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <div className="about-wrapper">
          <div className="about-container">
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Nuestra Historia</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p>
                  Atléticos Nicas nació con la visión de proporcionar ropa deportiva de alta calidad 
                  para todos los nicaragüenses. Desde nuestros inicios, nos hemos comprometido a ofrecer 
                  productos que combinen estilo, comodidad y durabilidad.
                </p>
              </IonCardContent>
            </IonCard>

            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Nuestra Misión</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p>
                  Proporcionar ropa deportiva de la más alta calidad que inspire a nuestros clientes 
                  a alcanzar sus metas deportivas y mantener un estilo de vida activo y saludable.
                </p>
              </IonCardContent>
            </IonCard>

            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Nuestros Valores</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <ul>
                  <li>Calidad en cada producto</li>
                  <li>Compromiso con nuestros clientes</li>
                  <li>Innovación constante</li>
                  <li>Responsabilidad social</li>
                  <li>Pasión por el deporte</li>
                </ul>
              </IonCardContent>
            </IonCard>

            <IonCard>
              <IonCardHeader>
                <IonCardTitle>¿Por qué elegirnos?</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p>
                  En Atléticos Nicas, nos enorgullecemos de ofrecer productos que no solo cumplen 
                  con los más altos estándares de calidad, sino que también reflejan el espíritu 
                  deportivo nicaragüense. Cada producto está diseñado pensando en la comodidad, 
                  durabilidad y estilo que nuestros clientes merecen.
                </p>
              </IonCardContent>
            </IonCard>
          </div>

          <Footer />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default About;

