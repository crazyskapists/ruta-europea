function solicitarPermiso() {
  Notification.requestPermission().then(permiso => {
    if (permiso === 'granted') {
      programarNotificaciones();
    }
  });
}

function programarNotificaciones() {
  const juegos = [
    { titulo: 'Dream 😴', hora: '22:00', fecha: '2025-06-30' },
    { titulo: 'Haunted Dinner', hora: '17:30', fecha: '2025-08-03' },
    { titulo: 'Mad Tea Party', hora: '11:00', fecha: '2025-08-28' },
    { titulo: 'Cyber Cube', hora: '17:30', fecha: '2025-08-03' },
    { titulo: 'Alice', hora: '11:00', fecha: '2025-08-28' },
    { titulo: 'Guilty', hora: '17:30', fecha: '2025-08-03' },
    { titulo: 'Stranger Room', hora: '11:00', fecha: '2025-08-28' },
    { titulo: 'Cativeiro', hora: '17:30', fecha: '2025-08-03' },
    { titulo: 'Invictus', hora: '11:00', fecha: '2025-08-28' },
    { titulo: 'Apocalypse', hora: '17:30', fecha: '2025-08-03' },
    { titulo: 'Dark Cube', hora: '11:00', fecha: '2025-08-28' },
    { titulo: 'Porto Wine Sabotage', hora: '17:30', fecha: '2025-08-03' },
    { titulo: 'Porto Lost Memories', hora: '11:00', fecha: '2025-08-28' },
    { titulo: 'The Sacrifice', hora: '17:30', fecha: '2025-08-03' },
    { titulo: 'Prisao da PIDE', hora: '11:00', fecha: '2025-08-28' },
    { titulo: 'Terras de Vera Cruz', hora: '17:30', fecha: '2025-08-03' },
    { titulo: 'Ressaca', hora: '11:00', fecha: '2025-08-28' },
    { titulo: 'The Last Game Porto', hora: '17:30', fecha: '2025-08-03' },
    { titulo: 'Casa da Moeda', hora: '11:00', fecha: '2025-08-28' },
    { titulo: 'Professor: Assalto Final', hora: '17:30', fecha: '2025-08-03' },
    { titulo: 'The Game', hora: '11:00', fecha: '2025-08-28' },
    { titulo: 'Dead City', hora: '17:30', fecha: '2025-08-03' },
    { titulo: 'La Cabaña de la Bruja', hora: '11:00', fecha: '2025-08-28' },
    { titulo: 'Ladrones del Grimorio', hora: '17:30', fecha: '2025-08-03' },
    { titulo: 'Cueva del Conocimiento', hora: '11:00', fecha: '2025-08-28' },
    { titulo: 'Tras el último Dragón', hora: '17:30', fecha: '2025-08-03' },
    { titulo: 'Corporación Pineapple', hora: '11:00', fecha: '2025-08-28' },
    { titulo: 'Experimento Clandestino', hora: '17:30', fecha: '2025-08-03' }, 
    { titulo: 'Le Grand Hotel de Paris', hora: '', fecha: '' },
    { titulo: 'Nautilus', hora: '', fecha: '' },
    { titulo: 'Secret Mission', hora: '', fecha: '' },
    { titulo: 'Galactic Mission', hora: '', fecha: '' },
    { titulo: 'Doomed Expedition', hora: '', fecha: '' },
    { titulo: 'The Crypt', hora: '', fecha: '' },
    { titulo: 'Full Experience', hora: '', fecha: '' },
    { titulo: 'Taxidermist', hora: '', fecha: '' },
    { titulo: 'Fairy Tale Regulations', hora: '', fecha: '' },
    { titulo: 'Fantastic Warehouse', hora: '', fecha: '' },
    { titulo: 'Le Manoir Devaux', hora: '', fecha: '' },
    { titulo: 'Druid Bane', hora: '', fecha: '' },
    { titulo: 'The Movies Experience', hora: '', fecha: '' },
    { titulo: 'Demise of the Gricers', hora: '', fecha: '' },
    { titulo: 'Saint Romualdus', hora: '', fecha: '' },
    { titulo: 'Hans Revenge', hora: '', fecha: '' },
    { titulo: 'Toy Factory', hora: '', fecha: '' },
    { titulo: 'Monsters Mushers', hora: '', fecha: '' },
    { titulo: 'Lost and Found', hora: '', fecha: '' },
    { titulo: 'Illusion', hora: '', fecha: '' },
    { titulo: 'Jasons Legacy', hora: '', fecha: '' },
    { titulo: 'Midnite', hora: '', fecha: '' },
    { titulo: 'Mollys Game', hora: '', fecha: '' },
    { titulo: 'Pray', hora: '', fecha: '' },
    { titulo: 'The Non Believers', hora: '', fecha: '' },
    { titulo: 'Are You Lost', hora: '', fecha: '' },
    { titulo: 'Are You Lost', hora: '', fecha: '' },
    { titulo: 'The Dome', hora: '', fecha: '' },
    { titulo: 'The Alchemist', hora: '', fecha: '' },
    { titulo: 'Botanist Manor', hora: '', fecha: '' },
    { titulo: '', hora: '', fecha: '' },
    { titulo: '', hora: '', fecha: '' },
    { titulo: '', hora: '', fecha: '' }
    
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