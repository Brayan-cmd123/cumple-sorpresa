alert("JS cargado");
// ===============================
// ELEMENTOS
// ===============================

const regalo = document.querySelector(".regalo");
const regalos = document.querySelector(".regalos");

const modalCarta = document.getElementById("modalCarta");
const modalGaleria = document.getElementById("modalGaleria");

const cerrarGaleria = document.getElementById("cerrarGaleria");
const btnGaleria = document.getElementById("btnGaleria");

const overlay = document.getElementById("overlay");

const soplido = document.getElementById("soplido");
const cancion = document.getElementById("cancion");

const llama = document.getElementById("llama");

const btnComenzar = document.getElementById("btnComenzar");
const pantallaInicio = document.getElementById("pantallaInicio");

const textoAnimado = document.getElementById("textoAnimado");

// ===============================
// VARIABLES
// ===============================

let velaApagada = false;

// ===============================
// INICIAR EXPERIENCIA
// ===============================

function iniciarSorpresa() {

  // Ocultar pantalla inicial
  pantallaInicio.classList.add("oculto");

  setTimeout(() => {

    pantallaInicio.style.display = "none";

  }, 1000);

  // Música
  if (cancion) {

    cancion.volume = 0.5;

    cancion.play().catch(() => {
      console.log("Autoplay bloqueado");
    });

  }

}

btnComenzar?.addEventListener("click", iniciarSorpresa);

// ===============================
// MODAL CARTA
// ===============================

function abrirCarta() {

  modalCarta?.classList.add("activo");

}

function cerrarCarta(event) {

  if (event.target === modalCarta) {

    modalCarta.classList.remove("activo");

  }

}

// Solo tapa y caja
regalo?.addEventListener("click", abrirCarta);

regalos?.addEventListener("click", abrirCarta);

modalCarta?.addEventListener("click", cerrarCarta);

// ===============================
// MODAL GALERÍA
// ===============================

function abrirGaleria(event) {

  // Evita abrir carta al tocar botón
  event.stopPropagation();

  modalGaleria?.classList.add("activo");

}

function cerrarModalGaleria() {

  modalGaleria?.classList.remove("activo");

}

btnGaleria?.addEventListener("click", abrirGaleria);

cerrarGaleria?.addEventListener(
  "click",
  cerrarModalGaleria
);

modalGaleria?.addEventListener("click", (event) => {

  if (event.target === modalGaleria) {

    cerrarModalGaleria();

  }

});

// ===============================
// APAGAR VELA
// ===============================

function apagarVela() {

  if (velaApagada) return;

  velaApagada = true;

  // Sonido
  if (soplido) {

    soplido.currentTime = 0;

    soplido.play();

  }

  // Animación
  llama.style.animation = "apagar .5s forwards";

  // Oscurecer fondo
  overlay?.classList.add("activo");

  setTimeout(() => {

    overlay?.classList.remove("activo");

  }, 1000);

}

llama?.addEventListener("click", apagarVela);

// ===============================
// FRASES
// ===============================

const frases = [

  "Gracias por existir 💖",
  "Eres una persona muy especial ✨",
  "Nunca dejes de sonreír 🌸",
  "Hoy celebramos tu vida 🎂",
  "Espero verte feliz siempre 💕",
  "Te mereces lo mejor del mundo 🌎",
  "Tu sonrisa ilumina todo 💫"

];

let indiceFrase = 0;

function cambiarFrase() {

  if (!textoAnimado) return;

  textoAnimado.style.opacity = "0";

  setTimeout(() => {

    textoAnimado.textContent =
      frases[indiceFrase];

    textoAnimado.style.opacity = "1";

    indiceFrase++;

    if (indiceFrase >= frases.length) {

      indiceFrase = 0;

    }

  }, 400);

}

// Inicial
cambiarFrase();

// Intervalo
setInterval(cambiarFrase, 4000);

// ===============================
// TOUCH MOBILE
// ===============================

document.addEventListener(
  "touchstart",
  () => {},
  { passive: true }
);

// ===============================
// PREVENIR ZOOM DOBLE TAP IOS
// ===============================

let ultimoToque = 0;

document.addEventListener("touchend", (event) => {

  const ahora = Date.now();

  if (ahora - ultimoToque <= 300) {

    event.preventDefault();

  }

  ultimoToque = ahora;

}, { passive: false });

// ===============================
// REAJUSTE RESPONSIVE
// ===============================

window.addEventListener("resize", () => {

  document.body.style.height =
    window.innerHeight + "px";

});