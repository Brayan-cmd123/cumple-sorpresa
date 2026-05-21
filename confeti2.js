// ===============================
// CONFETI FONDO
// ===============================

const canvasConfeti = document.getElementById("canvas1");
const ctxConfeti = canvasConfeti.getContext("2d");

// Tamaño
let ancho = canvasConfeti.width = window.innerWidth;
let alto = canvasConfeti.height = window.innerHeight;

// Array confetis
let confetis = [];

// Colores
const coloresConfeti = [
  "#ff9baa",
  "#e08290",
  "#fbd0d6",
  "#f85d74",
  "#f6798b",
  "#eeaeb8",
  "#ffffff"
];

// ===============================
// CREAR CONFETI
// ===============================

function crearConfeti() {

  confetis = [];

  const cantidad = window.innerWidth < 768 ? 60 : 120;

  for (let i = 0; i < cantidad; i++) {

    confetis.push({

      x: Math.random() * ancho,
      y: Math.random() * alto,

      radio: Math.random() * 4 + 2,

      color:
        coloresConfeti[
          Math.floor(Math.random() * coloresConfeti.length)
        ],

      velocidadY: Math.random() * 1.5 + 0.5,

      velocidadX: Math.random() * 1 - 0.5

    });

  }

}

// ===============================
// DIBUJAR
// ===============================

function dibujarConfeti() {

  // LIMPIAR canvas
  ctxConfeti.clearRect(0, 0, ancho, alto);

  confetis.forEach((confeti) => {

    ctxConfeti.beginPath();

    ctxConfeti.arc(
      confeti.x,
      confeti.y,
      confeti.radio,
      0,
      Math.PI * 2
    );

    ctxConfeti.fillStyle = confeti.color;

    ctxConfeti.fill();

    // Movimiento
    confeti.y += confeti.velocidadY;
    confeti.x += confeti.velocidadX;

    // Reiniciar arriba
    if (confeti.y > alto) {

      confeti.y = -10;
      confeti.x = Math.random() * ancho;

    }

    // Bordes
    if (confeti.x > ancho) confeti.x = 0;
    if (confeti.x < 0) confeti.x = ancho;

  });

  requestAnimationFrame(dibujarConfeti);

}

// ===============================
// RESPONSIVE
// ===============================

window.addEventListener("resize", () => {

  ancho = canvasConfeti.width = window.innerWidth;
  alto = canvasConfeti.height = window.innerHeight;

  crearConfeti();

});

// ===============================
// INICIAR
// ===============================

crearConfeti();

dibujarConfeti();