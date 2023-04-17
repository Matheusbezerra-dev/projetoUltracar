import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './pages/Home/Home';
import GlobalStyles from './style/GlobalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Provider from './context/provider';
import Parts from './pages/Parts/Parts';
import Client from './pages/Client/Client';
import Collaborator from './pages/Collaborator/Collaborator';
import ResgisterParts from './pages/ResgisterParts/ResgisterParts';
import ResgisterClient from './pages/ResgisterClient/ResgisterClient';
import ResgisterCollaborator from './pages/ResgisterCollaborator/ResgisterCollaborator';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
        <Provider>
          <GlobalStyles />
          <Routes>
            <Route element={<App />}>
              <Route path='/' element={ <Home /> } />
              <Route path='/parts-area' element={ <Parts /> } />
              <Route path='/client-area' element={ <Client /> } />
              <Route path='/Collaborator-area' element={ <Collaborator /> } />                  
              <Route path='/parts-area/register-parts' element={ <ResgisterParts /> } />
              <Route path='/client-area/register-client' element={ <ResgisterClient /> } />
              <Route path='/Collaborator-area/register-collaborator' element={ <ResgisterCollaborator /> } />
            </Route>
          </Routes>
        </Provider>
      </BrowserRouter>
  </React.StrictMode>,
)
