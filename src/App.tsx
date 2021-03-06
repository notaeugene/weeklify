import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLoading,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { listOutline, statsChartOutline, settingsOutline } from 'ionicons/icons'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'

import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'
import Summary from './pages/Summary'
import Settings from './pages/Settings'
import Integrations from './pages/Integrations'
import Signup from './pages/Signup'

import useUserAuth from './hooks/useUserAuth'

import UserAuthContext from './contexts/UserAuth'

const App: React.FC = () => {
  const {
    isUserLoading,
    isUserValid,
    defaultWorkspace,
    apiKeys,
    setApiKeys,
  } = useUserAuth()

  return (
    <UserAuthContext.Provider
      value={{
        isUserLoading,
        isUserValid,
        defaultWorkspace,
        apiKeys,
        setApiKeys,
      }}
    >
      <IonApp>
        {isUserLoading ? (
          <IonLoading isOpen={true} message={'Please wait...'} />
        ) : (
          <IonReactRouter>
            <IonTabs>
              <IonRouterOutlet>
                <Route path="/signup" component={Signup} exact={true} />
                <Route path="/projects" component={Projects} exact={true} />
                <Route
                  path="/projects/:pid"
                  component={ProjectDetails}
                  exact={true}
                />
                <Route path="/summary" component={Summary} exact={true} />
                <Route path="/settings" component={Settings} exact={true} />
                <Route
                  path="/settings/integrations"
                  component={Integrations}
                  exact={true}
                />
                <Route
                  path="/"
                  render={() =>
                    isUserValid ? (
                      <Redirect to="/projects" />
                    ) : (
                      <Redirect to="/signup" />
                    )
                  }
                  exact={true}
                />
              </IonRouterOutlet>
              <IonTabBar slot="bottom" hidden={!isUserValid}>
                <IonTabButton tab="projects" href="/projects">
                  <IonIcon icon={listOutline} />
                  <IonLabel>Projects</IonLabel>
                </IonTabButton>
                <IonTabButton tab="summary" href="/summary">
                  <IonIcon icon={statsChartOutline} />
                  <IonLabel>Summary</IonLabel>
                </IonTabButton>
                <IonTabButton tab="settings" href="/settings">
                  <IonIcon icon={settingsOutline} />
                  <IonLabel>Settings</IonLabel>
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          </IonReactRouter>
        )}
      </IonApp>
    </UserAuthContext.Provider>
  )
}

export default App
