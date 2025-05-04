// Importa las funciones necesarias del SDK de Firebase
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Configuración de tu aplicación Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDcwyea2T6eXzlpzBHm96tdbTRBQlkz9QI',
  authDomain: 'spherical-list-256901.firebaseapp.com',
  databaseURL: 'https://spherical-list-256901-default-rtdb.firebaseio.com',
  projectId: 'spherical-list-256901',
  storageBucket: 'spherical-list-256901.firebasestorage.app',
  messagingSenderId: '886744852431',
  appId: '1:886744852431:web:0fe9ea81600264148514ba',
  measurementId: 'G-31ZFSVE61Q',
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

