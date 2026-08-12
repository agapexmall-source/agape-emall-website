import { getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCD7BADbfGuLOioFQEY2r5U1yuqSOtSdY8',
  authDomain: 'studio-3685960200-87b3c.firebaseapp.com',
  projectId: 'studio-3685960200-87b3c',
  storageBucket: 'studio-3685960200-87b3c.firebasestorage.app',
  messagingSenderId: '799863541591',
  appId: '1:799863541591:web:f89c0171219657d821b812',
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export const db = getFirestore(app);