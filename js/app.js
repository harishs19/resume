/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* Galaxy Starfield — purple/cyan theme */
particlesJS('particles-js', {
  "particles": {
    "number": { "value": 160, "density": { "enable": true, "value_area": 900 } },
    "color": { "value": ["#ffffff", "#a855f7", "#38bdf8", "#c084fc", "#7dd3fc"] },
    "shape": {
      "type": "circle",
      "stroke": { "width": 0, "color": "#000000" }
    },
    "opacity": {
      "value": 0.8,
      "random": true,
      "anim": { "enable": true, "speed": 0.8, "opacity_min": 0.1, "sync": false }
    },
    "size": {
      "value": 2.5,
      "random": true,
      "anim": { "enable": true, "speed": 2, "size_min": 0.3, "sync": false }
    },
    "line_linked": { "enable": false },
    "move": {
      "enable": true,
      "speed": 0.6,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick":  { "enable": true,  "mode": "bubble" },
      "resize": true
    },
    "modes": {
      "repulse": { "distance": 120, "duration": 0.5 },
      "bubble":  { "distance": 200, "size": 8, "duration": 1.5, "opacity": 1, "speed": 2 },
      "push":    { "particles_nb": 6 }
    }
  },
  "retina_detect": true
});