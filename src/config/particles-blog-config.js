export const blogParticlesOptions = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#58A6FF"
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
        random: true,
      },
      size: {
        value: 10,
        random: true,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "top",
        straight: false,
        out_mode: "out",
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "bubble"
        },
      },
      modes: {
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        }
      }
    },
    retina_detect: true
  };
  