export const contactParticlesOptions = {
    particles: {
      number: {
        value: 20,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#58A6FF"
      },
      shape: {
        type: "polygon",
        polygon: {
          nb_sides: 6,
        }
      },
      opacity: {
        value: 0.3,
        random: true,
      },
      size: {
        value: 20,
        random: false,
      },
      line_linked: {
        enable: true,
        distance: 200,
        color: "#E6EDF3",
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 0.5
          }
        }
      }
    },
    retina_detect: true
  };
  