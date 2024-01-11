importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "fontysmaua.firebaseapp.com",
    projectId: "fontysmaua",
    storageBucket: "fontysmaua.appspot.com",
    messagingSenderId: "94465567670",
    appId: "1:94465567670:web:af54261526dd67e5e5af17",
    measurementId: "G-JFTK62SP81"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler((payload) => {
    console.log('Background message received:', payload);
    // Customize the way you want to display the background message notification
});