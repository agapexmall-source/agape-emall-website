import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

const getEnvVar = (key: string): string => {
  if (typeof import.meta !== 'undefined' && (import.meta as unknown as Record<string, Record<string, string>>).env) {
    return (import.meta as unknown as Record<string, Record<string, string>>).env[key] || '';
  }
  if (typeof process !== 'undefined' && process.env) {
    return process.env[key] || '';
  }
  return '';
};

const firebaseConfig = {
  apiKey: getEnvVar('VITE_FIREBASE_API_KEY') || 'AIzaSyPlaceholderKeyForClientInit',
  authDomain: getEnvVar('VITE_FIREBASE_AUTH_DOMAIN') || 'agape-mall.firebaseapp.com',
  projectId: getEnvVar('VITE_FIREBASE_PROJECT_ID') || 'agape-mall',
  storageBucket: getEnvVar('VITE_FIREBASE_STORAGE_BUCKET') || 'agape-mall.appspot.com',
  messagingSenderId: getEnvVar('VITE_FIREBASE_MESSAGING_SENDER_ID') || '1029384756',
  appId: getEnvVar('VITE_FIREBASE_APP_ID') || '1:1029384756:web:abcd1234efgh5678',
};

let app: FirebaseApp;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);
export default app;
