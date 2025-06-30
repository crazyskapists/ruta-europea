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
    { titulo: 'Dream 😴', hora: '22:20', fecha: '2025-06-30' },
    // ... el resto de juegos
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