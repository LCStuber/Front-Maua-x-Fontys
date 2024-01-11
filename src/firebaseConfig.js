import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { register } from 'register-service-worker'

register('./firebase-messaging-sw.js', {
    registrationOptions: { scope: './' },
    ready(registration) {
        console.log('Service worker is active.')
    },
    registered(registration) {
        console.log('Service worker has been registered.')
    },
    cached(registration) {
        console.log('Content has been cached for offline use.')
    },
    updatefound(registration) {
        console.log('New content is downloading.')
    },
    updated(registration) {
        console.log('New content is available; please refresh.')
    },
    offline() {
        console.log('No internet connection found. App is running in offline mode.')
    },
    error(error) {
        console.error('Error during service worker registration:', error)
    }
})

export const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "fontysmaua.firebaseapp.com",
    projectId: "fontysmaua",
    storageBucket: "fontysmaua.appspot.com",
    messagingSenderId: "94465567670",
    appId: "1:94465567670:web:af54261526dd67e5e5af17",
    measurementId: "G-JFTK62SP81"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export {messaging}

const getFirebaseToken = async (setTokenFound) => {
    return getToken(messaging, {
        vapidKey: process.env.REACT_APP_FIREBASE_VAPID_KEY
    })
        .then(currentToken => {
            if (currentToken) {
                console.log("Client Token: ", currentToken);
                setTokenFound(true)
            } else {
                console.log("Failed to generate registration token");
                setTokenFound(false)
            }
        })
        .catch(error => {
            console.log("An error occurrred when requesting for token", error);
        });
}

const displayNotification = (title, body) => {
    if (Notification.permission === 'granted') {
        new Notification(title, { body });
      } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            displayNotification(title, body);
          }
        });
      }
};

const onMessageListener = () =>{
    new Promise(resolve => {
        onMessage(messaging, payload => {
            console.log('Foreground message received:', payload);
            const { title, body } = payload.notification;

            displayNotification(title, body);
            resolve(payload);
        })
    })
}

export const requestPermission = async (setTokenFound) => {
    console.log("Requesting User Permission...");
    try {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
            console.log("Notifications permitted");
            await getFirebaseToken(setTokenFound);
            await onMessageListener();
        } else {
            console.log("User Permission denied");
        }
    } catch (error) {
        console.error('Error requesting permission:', error);
    }
};