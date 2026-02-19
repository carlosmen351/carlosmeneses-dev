export const projectsParticlesOptions = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#58A6FF"
      },
      shape: {
        type: "star",
      },
      opacity: {
        value: 0.7,
        random: true,
      },
      size: {
        value: 5,
        random: true,
      },
      line_linked: {
        enable: false,
      },
      move: {
        enable: true,
        speed: 3,
        direction: "bottom",
        straight: true,
        out_mode: "out",
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
      },
      modes: {
        repulse: {
          distance: 200,
          duration: 0.4
        }
      }
    },
    retina_detect: true
  };
  