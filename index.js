import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDs7KRF99bweml1qLq9qCRmnGsfvLTZOh8",
  authDomain: "fir-notes-app-483ff.firebaseapp.com",
  databaseURL: "https://fir-notes-app-483ff.firebaseio.com",
  projectId: "fir-notes-app-483ff",
  storageBucket: "fir-notes-app-483ff.appspot.com",
  messagingSenderId: "682804307045",
  appId: "1:682804307045:web:a550737d8aeea8de3f528c",
  measurementId: "G-K4MD18463G"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();