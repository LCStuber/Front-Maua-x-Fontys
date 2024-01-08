import { initializeApp } from 'firebase/app';
import { getMessaging } from "firebase/messaging/sw";
import { onBackgroundMessage } from "firebase/messaging/sw";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "fontysmaua.firebaseapp.com",
    projectId: "fontysmaua",
    storageBucket: "fontysmaua.appspot.com",
    messagingSenderId: "94465567670",
    appId: "1:94465567670:web:af54261526dd67e5e5af17",
    measurementId: "G-JFTK62SP81"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);
  const messaging = getMessaging(firebaseApp);
  
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
      .then(function(registration) {
        console.log('Registration successful, scope is:', registration.scope);
      }).catch(function(err) {
        console.log('Service worker registration failed, error:', err);
      });
    }