// Función para pedir permiso
function solicitarPermiso() {
  Notification.requestPermission().then(permiso => {
    if (permiso === 'granted') {
      localStorage.setItem('notificaciones_activadas', 'true');
      programarNotificaciones();
    }
  });
}

// Función para programar las notificaciones locales
function programarNotificaciones() {
  const juegos = [
    { titulo: 'Dream 😴', hora: '23:35', fecha: '2025-06-30' },
    { titulo: 'Haunted Dinner', hora: '12:15', fecha: '2025-08-28' },
    { titulo: 'Mad Tea Party', hora: '13:30', fecha: '2025-08-28' },
    { titulo: 'Cyber Cube', hora: '22:00', fecha: '2025-08-28' },
    { titulo: 'Alice', hora: '9:45', fecha: '2025-08-29' },
    { titulo: 'Guilty', hora: '11:00', fecha: '2025-08-29' },
    { titulo: 'Stranger Room', hora: '13:30', fecha: '2025-08-29' },
    { titulo: 'Cativeiro', hora: '15:15', fecha: '2025-08-29' },
    { titulo: 'Invictus', hora: '19:00', fecha: '2025-08-29' },
    { titulo: 'Apocalypse', hora: '20:30', fecha: '2025-08-29' },
    { titulo: 'Dark Cube', hora: '22:00', fecha: '2025-08-29' },
    { titulo: 'Porto Wine Sabotage', hora: '10:30', fecha: '2025-08-30' },
    { titulo: 'Porto Lost Memories', hora: '12:00', fecha: '2025-08-30' },
    { titulo: 'The Sacrifice', hora: '14:30', fecha: '2025-08-30' },
    { titulo: 'Prisao da PIDE', hora: '18:00', fecha: '2025-08-30' },
    { titulo: 'Terras de Vera Cruz', hora: '19:00', fecha: '2025-08-30' },
    { titulo: 'Ressaca', hora: '20:30', fecha: '2025-08-30' },
    { titulo: 'The Last Game Porto', hora: '22:00', fecha: '2025-08-30' },
    { titulo: 'Casa da Moeda', hora: '10:30', fecha: '2025-08-31' },
    { titulo: 'Professor: Assalto Final', hora: '11:30', fecha: '2025-08-31' },
    { titulo: 'The Game', hora: '13:30', fecha: '2025-08-31' },
    { titulo: 'Dead City', hora: '14:30', fecha: '2025-08-31' },
    { titulo: 'La Cabaña de la Bruja', hora: '21:10', fecha: '2025-08-31' },
    { titulo: 'Ladrones del Grimorio', hora: '10:00', fecha: '2025-09-01' },
    { titulo: 'Cueva del Conocimiento', hora: '11:45', fecha: '2025-09-01' },
    { titulo: 'Tras el último Dragón', hora: '16:00', fecha: '2025-09-01' },
    { titulo: 'Corporación Pineapple', hora: '19:30', fecha: '2025-09-01' },
    { titulo: 'Experimento Clandestino', hora: '22:00', fecha: '2025-09-01' }, 
    { titulo: 'Le Grand Hotel de Paris', hora: '11:45', fecha: '2025-09-04' },
    { titulo: 'Nautilus', hora: '14:00', fecha: '2025-09-04' },
    { titulo: 'Secret Mission', hora: '16:30', fecha: '2025-09-04' },
    { titulo: 'Galactic Mission', hora: '20:00', fecha: '2025-09-04' },
    { titulo: 'Doomed Expedition', hora: '10:00', fecha: '2025-09-05' },
    { titulo: 'The Crypt', hora: '12:30', fecha: '2025-09-05' },
    { titulo: 'Full Experience', hora: '16:00', fecha: '2025-09-05' },
    { titulo: 'Taxidermist', hora: '19:45', fecha: '2025-09-05' },
    { titulo: 'Fairy Tale Regulations', hora: '10:00', fecha: '2025-09-06' },
    { titulo: 'Fantastic Warehouse', hora: '12:00', fecha: '2025-09-06' },
    { titulo: 'Le Manoir Devaux', hora: '16:00', fecha: '2025-09-06' },
    { titulo: 'Druid Bane', hora: '18:00', fecha: '2025-09-06' },
    { titulo: 'The Movies Experience', hora: '10:00', fecha: '2025-09-07' },
    { titulo: 'Demise of the Gricers', hora: '17:30', fecha: '2025-09-07' },
    { titulo: 'Saint Romualdus', hora: '11:45', fecha: '2025-09-08' },
    { titulo: 'Hans Revenge', hora: '13:45', fecha: '2025-09-08' },
    { titulo: 'Toy Factory', hora: '18:45', fecha: '2025-09-08' },
    { titulo: 'Monsters Mushers', hora: '21:00', fecha: '2025-09-08' },
    { titulo: 'Lost and Found', hora: '11:00', fecha: '2025-09-09' },
    { titulo: 'Illusion', hora: '14:45', fecha: '2025-09-09' },
    { titulo: 'Jasons Legacy', hora: '18:30', fecha: '2025-09-09' },
    { titulo: 'Midnite', hora: '20:00', fecha: '2025-09-09' },
    { titulo: 'Mollys Game', hora: '10:00', fecha: '2025-09-10' },
    { titulo: 'Pray', hora: '14:00', fecha: '2025-09-10' },
    { titulo: 'The Non Believers', hora: '17:30', fecha: '2025-09-10' },
    { titulo: 'Are You Lost', hora: '20:00', fecha: '2025-09-10' },
    { titulo: 'Are You Lost', hora: '22:00', fecha: '2025-09-10' },
    { titulo: 'The Dome', hora: '11:30', fecha: '2025-09-11' },
    { titulo: 'The Alchemist', hora: '16:00', fecha: '2025-09-11' },
    { titulo: 'Botanist Manor', hora: '22:00', fecha: '2025-09-11' },
  ];

  const ahora = new Date();

  juegos.forEach(juego => {
    if (!juego.fecha || !juego.hora) return;

    const juegoHora = new Date(`${juego.fecha}T${juego.hora}:00`);
    const notiHora = new Date(juegoHora.getTime() - 60 * 60 * 1000);
    const tiempoRestante = notiHora.getTime() - ahora.getTime();

    if (tiempoRestante > 0 && tiempoRestante < 10 * 24 * 60 * 60 * 1000) {
      setTimeout(() => {
        new Notification(`🚨​¡Ey equipo, atentos!🚨​`, {
          body: `Tenéis ${juego.titulo} en 1 hora 🕒, no lleguéis tarde, saludos de Stitch. 💙​`,
          icon: 'imagenes/logo.png'
        });
      }, tiempoRestante);
      console.log(`⏰ Notificación programada para ${juego.titulo} a las ${notiHora}`);
    } else {
      console.log(`❌ No se programa ${juego.titulo}, ya pasó o es muy lejana.`);
    }
  });
}

// Evento para cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btnNotificaciones');

  if (btn) {
    btn.addEventListener('click', solicitarPermiso);
  }

  if (Notification.permission === 'granted' &&
      localStorage.getItem('notificaciones_activadas') === 'true') {
    programarNotificaciones();
  }
});

// Configurar Firebase con tu config
const firebaseConfig = {
  apiKey: "AIzaSyBw1GKqP2m3QJxlEnolzrUjJ9w3d2ta9jA",
  authDomain: "europita-465eb.firebaseapp.com",
  projectId: "europita-465eb",
  storageBucket: "europita-465eb.appspot.com", // Asegúrate que termina en .appspot.com
  messagingSenderId: "458801176847",
  appId: "1:458801176847:web:01280c38b419de5d3c5e7a",
  measurementId: "G-WYHDXMGTR6"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Función para pedir permiso y obtener token
async function pedirPermisoFirebase() {
  try {
    // Pedir permiso para notificaciones (si no está dado)
    const permiso = await Notification.requestPermission();
    if (permiso !== 'granted') {
      console.log('Permiso para notificaciones denegado');
      return;
    }
    // Obtener token para Firebase Cloud Messaging
    const token = await messaging.getToken({
      vapidKey: 'BNf35iKHn9Zvu0KuDYPAv_TYPnuVmfwwqZonIZ7lK-Uw-vtzygU' // Debes poner tu propia clave VAPID de Firebase
    });
    console.log('Token FCM:', token);

    // Aquí puedes enviar el token a tu backend o guardarlo localmente para enviar notificaciones

  } catch (error) {
    console.error('Error obteniendo token Firebase Messaging:', error);
  }
}

// Listener para mensajes cuando la web está en primer plano
messaging.onMessage(payload => {
  console.log('Mensaje recibido en primer plano: ', payload);
  // Aquí puedes mostrar notificaciones custom si quieres
});