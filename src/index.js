import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
import { persist } from './redux/reducers/configureStore';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PersistGate persistor={persist}>
    <App />
  </PersistGate>


);

