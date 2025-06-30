importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBw1GKqP2m3QJxlEnolzrUjJ9w3d2ta9jA",
  authDomain: "europita-465eb.firebaseapp.com",
  projectId: "europita-465eb",
  storageBucket: "europita-465eb.firebasestorage.app",
  messagingSenderId: "458801176847",
  appId: "1:458801176847:web:01280c38b419de5d3c5e7a",
  measurementId: "G-WYHDXMGTR6"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  console.log('[firebase-service-worker.js] Mensaje recibido', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icono.png' // opcional
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});