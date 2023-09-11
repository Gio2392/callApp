// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCtFUnKX463It1SOw_1JtjZR0kA_8YdHgU',
  authDomain: 'callapp-10c8b.firebaseapp.com',
  projectId: 'callapp-10c8b',
  storageBucket: 'callapp-10c8b.appspot.com',
  messagingSenderId: '859320945317',
  appId: '1:859320945317:web:1d72ef55898cb0b1691b4c',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);
