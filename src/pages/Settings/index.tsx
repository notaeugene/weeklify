import React from 'react'
import { RouteComponentProps } from 'react-router'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonCard,
  IonLabel,
  IonText,
} from '@ionic/react'

const Settings: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Settings</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* TODO: uncomment for the future release */}
        {/* <IonCard>
          <IonList>
            <IonItem routerLink="/settings/appeareance">
              <IonLabel>Appeareance</IonLabel>
            </IonItem>
            <IonItem routerLink="/settings/notifications" lines="none">
              <IonLabel>Push Notifications</IonLabel>
            </IonItem>
          </IonList>
        </IonCard> */}
        <IonCard>
          <IonList>
            <IonItem routerLink="/settings/integrations" lines="none">
              <IonLabel>Integrations</IonLabel>
            </IonItem>
          </IonList>
        </IonCard>
        {/* TODO: uncomment for the future release */}
        {/* <IonCard>
          <IonList>
            <IonItem lines="none">
              <IonLabel color="danger">Sign Out</IonLabel>
            </IonItem>
          </IonList>
        </IonCard> */}

        <IonText color="medium">
          <p style={{ textAlign: 'center' }}>
            Weeklify version {process.env.REACT_APP_VERSION}
          </p>
        </IonText>
      </IonContent>
    </IonPage>
  )
}

export default Settings
