self.addEventListener('install', function (event) {
  console.log('🛠️ Service Worker instalado');
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  console.log('🚀 Service Worker activado');
});

self.addEventListener('message', function (event) {
  const { titulo, fecha, hora } = event.data;
  if (!titulo || !fecha || !hora) return;

  const juegoHora = new Date(`${fecha}T${hora}:00`);
  const notiHora = new Date(juegoHora.getTime() - 60 * 60 * 1000);
  const tiempoRestante = notiHora.getTime() - Date.now();

  if (tiempoRestante > 0) {
    setTimeout(() => {
      self.registration.showNotification('🚨 ¡Ey equipo, atentos! 🚨', {
        body: `Tenéis ${titulo} en 1 hora 🕒. Saludos de Stitch.`,
        icon: 'imagenes/logo.png',
        badge: 'imagenes/logo.png'
      });
    }, tiempoRestante);
  }
});