import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

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

export {messaging};

// export const requestPermission = () => {
//   console.log("Requesting User Permission...");
//   Notification.requestPermission().then(permission => {
//     if (permission === "granted"){
//       console.log("Notifications permitted")
//       return getToken(messaging, {
//         vapidKey: 'BIKz1Pb_kgZfj_aPgd9hTcp_wiWW_pGdvUeGTAlGVSbqsW4awyq4MiqVHqUlIUrcXA0coxKouZBqvpyvalDZcBQ'
//       })
//         .then(currentToken => {
//           if(currentToken){
//             console.log("Client Token: ", currentToken);
//           } else {
//             console.log("Failed to generate registration token");
//           }
//         })
//         .catch(error => {
//           console.log("An error occurrred when requesting for token", error);
//         });
//     } else {
//       console.log("User Permission denied");
//     }
//   });
// };

// requestPermission();

// export const onMessageListener = () =>
//   new Promise(resolve => {
//     onMessage(messaging, payload => {
//       resolve(payload);
//     })
//   })

// getToken(messaging, { vapidKey: 'BIKz1Pb_kgZfj_aPgd9hTcp_wiWW_pGdvUeGTAlGVSbqsW4awyq4MiqVHqUlIUrcXA0coxKouZBqvpyvalDZcBQ' })
//   .then((currentToken) => {
//     if (currentToken) {
//       console.log('Device token:', currentToken);
//     } else {
//       console.log('No registration token available. Request permission to generate one.');
//     }
//   })
//   .catch((error) => {
//     console.error('Error getting device token:', error);
//   });

// onMessage(messaging, (payload) => {
//   console.log('Message received:', payload);
// });
