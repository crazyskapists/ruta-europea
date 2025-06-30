function solicitarPermiso() {
  Notification.requestPermission().then(permiso => {
    if (permiso === 'granted') {
      programarNotificaciones();
    }
  });
}

function programarNotificaciones() {
  const juegos = [
    { titulo: 'The Vault', hora: '14:00', fecha: '2025-08-02' },
    { titulo: 'Mindfall', hora: '17:30', fecha: '2025-08-03' }
  ];

  juegos.forEach(juego => {
    const juegoHora = new Date(`${juego.fecha}T${juego.hora}:00`);
    const notiHora = new Date(juegoHora.getTime() - 60 * 60 * 1000); // 1 hora antes

    const tiempoRestante = notiHora.getTime() - Date.now();
    if (tiempoRestante > 0) {
      setTimeout(() => {
        new Notification(`¡Próximo juego!`, {
          body: `${juego.titulo} en 1 hora 🕒`,
          icon: 'imagenes/icono-192.png'
        });
      }, tiempoRestante);
    }
  });
}