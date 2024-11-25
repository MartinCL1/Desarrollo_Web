import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>  {/** Engloba todos los estados que se encuentran en el store  cubre toda la app*/}
    <BrowserRouter> {/** Dentro Habran rutas */}
      <App />
    </BrowserRouter>
  </Provider>
);
