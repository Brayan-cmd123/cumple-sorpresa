// ===============================
// ELEMENTOS
// ===============================

// Regalo
const regalo = document.querySelector(".regalo");
const regalos = document.querySelector(".regalos");
const caja = document.querySelector(".caja");

// Modales
const modalCarta = document.getElementById("modalCarta");
const modalGaleria = document.getElementById("modalGaleria");

// Galería
const cerrarGaleria = document.getElementById("cerrarGaleria");
const btnGaleria = document.getElementById("btnGaleria");

// Overlay
const overlay = document.querySelector(".overlay");

// Audios
const soplido = document.getElementById("soplido");
const cancion = document.getElementById("cancion");

// Vela
const llama = document.querySelector(".llama");

// Pantalla inicio
const btnComenzar = document.getElementById("btnComenzar");
const pantallaInicio = document.getElementById("pantallaInicio");

// Texto animado
const textoAnimado = document.getElementById("textoAnimado");

// ===============================
// INICIAR SORPRESA
// ===============================

btnComenzar.addEventListener("click", () => {

  // Oculta pantalla inicial
  pantallaInicio.style.opacity = "0";
  pantallaInicio.style.pointerEvents = "none";

  setTimeout(() => {
    pantallaInicio.style.display = "none";
  }, 1000);

  // Música
  cancion.volume = 0.5;

  cancion.play().catch(() => {
    console.log("Autoplay bloqueado");
  });

});

// ===============================
// ABRIR CARTA
// ===============================

function abrirCarta() {

  modalCarta.classList.add("activo");

}

function cerrarCarta(e) {

  if (e.target === modalCarta) {

    modalCarta.classList.remove("activo");

  }

}

// Click en regalo
regalo.addEventListener("click", abrirCarta);

regalos.addEventListener("click", abrirCarta);

caja.addEventListener("click", abrirCarta);

// Cerrar carta
modalCarta.addEventListener("click", cerrarCarta);

// ===============================
// GALERÍA
// ===============================

// Abrir galería desde botón
btnGaleria.addEventListener("click", () => {

  modalGaleria.classList.add("activo");

});

// Cerrar galería
cerrarGaleria.addEventListener("click", () => {

  modalGaleria.classList.remove("activo");

});

// Cerrar tocando afuera
modalGaleria.addEventListener("click", (e) => {

  if (e.target === modalGaleria) {

    modalGaleria.classList.remove("activo");

  }

});

// ===============================
// APAGAR VELA
// ===============================

llama.addEventListener("click", () => {

  // Sonido
  soplido.currentTime = 0;
  soplido.play();

  // Desaparece llama
  llama.style.animation = "apagar .5s forwards";

  // Fondo oscuro
  overlay.classList.add("activo");

  setTimeout(() => {

    overlay.classList.remove("activo");

  }, 1000);

});

// ===============================
// FRASES BONITAS
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

let indice = 0;

function cambiarFrase() {

  textoAnimado.style.opacity = 0;

  setTimeout(() => {

    textoAnimado.textContent = frases[indice];

    textoAnimado.style.opacity = 1;

    indice++;

    if (indice >= frases.length) {

      indice = 0;

    }

  }, 400);

}

// Iniciar
cambiarFrase();

// Cambiar cada 4 segundos
setInterval(cambiarFrase, 4000);

// ===============================
// EFECTO TACTIL EN CELULAR
// ===============================

document.addEventListener("touchstart", () => {}, {
  passive: true
});