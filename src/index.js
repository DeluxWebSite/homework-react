import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { PersistGate } from 'redux-persist/integration/react';
// import { persist } from './redux/reducers/configureStore';

import { store } from "../src/redux/reducers/configureStore";
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <PersistGate persistor={persist}>
  <Provider store={store}>
    <App />
  </Provider>
  // </PersistGate>
);

