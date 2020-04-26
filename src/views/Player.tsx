import React from "react";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonTitle,
  IonHeader,
  IonToolbar,
  IonContent,
  IonItem,
  IonButton,
  IonInput,
  IonGrid,
  IonRow,
  IonCol,
  IonFooter,
} from "@ionic/react";

import { addOutline } from "ionicons/icons";

const App: React.FC = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Jugador</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonLabel position="floating">Datos básicos</IonLabel>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Nombre</IonLabel>
                <IonInput></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Apellidos</IonLabel>
                <IonInput></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Foto</IonLabel>
                <IonInput></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter>
        <IonRow className="ion-align-items-center">
          <IonCol class="ion-align-self-center">
            <IonButton color="primary">
              <IonIcon icon={addOutline} />
            </IonButton>
          </IonCol>
        </IonRow>
      </IonFooter>
    </IonApp>
  );
};

export default App;
