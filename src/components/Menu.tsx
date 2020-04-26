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
  IonMenu,
  IonList,
  IonButtons,
  IonMenuToggle,
} from "@ionic/react";

import {
  peopleOutline,
  footballOutline,
  statsChartOutline,
  menuOutline,
  calendarOutline,
} from "ionicons/icons";

const Menu: React.FC = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuToggle autoHide={false}>
              <IonIcon icon={menuOutline}></IonIcon>
            </IonMenuToggle>
          </IonButtons>
          <IonTitle>Team Maker</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonMenu side="start" content-id="menu">
        <IonHeader>
          <IonToolbar>
            <IonIcon icon={menuOutline}></IonIcon>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent id="menu" className="ion-padding">
          <IonList>
            <IonItem>
              <IonIcon icon={peopleOutline}></IonIcon>
              <IonLabel>Jugadores</IonLabel>
            </IonItem>
            <IonItem>
              <IonIcon icon={calendarOutline}></IonIcon>
              <IonLabel>Partidos</IonLabel>
            </IonItem>
            <IonItem>
              <IonIcon icon={footballOutline}></IonIcon>
              <IonLabel>Deportes</IonLabel>
            </IonItem>
            <IonItem>
              <IonIcon icon={statsChartOutline}></IonIcon>
              <IonLabel>Estadísticas</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
    </IonApp>
  );
};

export default Menu;
