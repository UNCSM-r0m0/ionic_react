import React from 'react';
import { IonFooter, IonToolbar, IonTitle, IonIcon, IonButton } from '@ionic/react';
import { logoFacebook, logoInstagram, logoTwitter, mailOutline, callOutline } from 'ionicons/icons';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <IonFooter>
      <IonToolbar color="dark">
        <div className="footer-content">
          <IonTitle size="small">Síguenos en nuestras redes sociales</IonTitle>
          <div className="social-icons">
            <IonButton fill="clear" href="https://facebook.com" target="_blank">
              <IonIcon icon={logoFacebook} />
            </IonButton>
            <IonButton fill="clear" href="https://instagram.com" target="_blank">
              <IonIcon icon={logoInstagram} />
            </IonButton>
            <IonButton fill="clear" href="https://twitter.com" target="_blank">
              <IonIcon icon={logoTwitter} />
            </IonButton>
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <IonIcon icon={mailOutline} />
              <span>contacto@atleticosnicas.com</span>
            </div>
            <div className="contact-item">
              <IonIcon icon={callOutline} />
              <span>+505 1234-5678</span>
            </div>
          </div>
          <p className="copyright">© 2024 Atléticos Nicas. Todos los derechos reservados.</p>
        </div>
      </IonToolbar>
    </IonFooter>
  );
};

export default Footer;

