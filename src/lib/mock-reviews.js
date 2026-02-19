// src/lib/mock-reviews.js
// Estos son datos de ejemplo para simular la respuesta de la API de GitHub.
// Nos permite construir y estilizar los componentes de la interfaz sin
// necesidad de hacer llamadas reales a la API durante el desarrollo.

export const mockReviews = [
  {
    id: 1,
    user: {
      login: 'jane-doe-dev',
      avatar_url: 'https://avatars.githubusercontent.com/u/1024025?v=4', // Octocat
    },
    body: 'Carlos es un desarrollador excepcional con un ojo increíble para el detalle. Su habilidad para traducir diseños complejos en interfaces de usuario fluidas y receptivas es impresionante. Siempre va más allá para asegurar que el producto final no solo funcione bien, sino que también ofrezca una gran experiencia de usuario.',
    html_url: '#', // Enlace de ejemplo al issue de GitHub
  },
  {
    id: 2,
    user: {
      login: 'john-doe-manager',
      avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4', // Linus Torvalds
    },
    body: 'Trabajar con Carlos en varios proyectos ha sido un placer. Es un comunicador claro, un solucionador de problemas proactivo y un verdadero jugador de equipo. Se apropia de su trabajo y consistentemente entrega resultados de alta calidad a tiempo.',
    html_url: '#',
  },
  {
    id: 3,
    user: {
      login: 'emily-white-designer',
      avatar_url: 'https://avatars.githubusercontent.com/u/67533393?v=4', // Mona (sin fondo)
    },
    body: 'Como diseñadora, aprecio enormemente la atención de Carlos a la precisión y su compromiso con la visión de diseño. No solo implementa los diseños a la perfección, sino que también sugiere mejoras técnicas que elevan la experiencia general. Es el puente perfecto entre diseño y desarrollo.',
    html_url: '#',
  }
];
