import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './pages/Home/Home';
import GlobalStyles from './style/GlobalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Provider from './context/provider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
        <Provider>
          <GlobalStyles />
          <Routes>
            <Route element={<App />}>
              <Route path='/' element={ <Home /> } />                    
            </Route>
          </Routes>
        </Provider>
      </BrowserRouter>
  </React.StrictMode>,
)
