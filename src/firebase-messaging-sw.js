
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAaqtvvAqdp7UG4Ch2HQnIN6C_V6xPQg1g",
  authDomain: "mauaxfontys.firebaseapp.com",
  projectId: "mauaxfontys",
  storageBucket: "mauaxfontys.appspot.com",
  messagingSenderId: "150426748488",
  appId: "1:150426748488:web:f7359f5bae20d45b32fa7d",
  measurementId: "G-QJGZS8JVCN"
};



function requestPermission() {
  console.log('Requesting permission...');
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      const app = initializeApp(firebaseConfig);
      const messaging = getMessaging(app);
      getToken(messaging, {vapidKey: 'BKhKofFvmncyizgOVuIG2EKPYdfkJlMnzGwH4Gse1ueySnQVK-76kPJ9gh4sfMinKRKKujI5Ow17cpu-g2lHgiM'}
      .then ((currentToken) => {
        if(currentToken) {
          console.log('current token', currentToken);
        } else {
          console.log('No registration token available. Request permission to generate one.');
        }
      }));
    } else {
      console.log('Unable to get permission to notify.');
    }});
  }
