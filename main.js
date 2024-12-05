// Inicializa una nueva instancia de Swiper
var swiper = new Swiper(".mySwiper", {
    
  // Configura cuántas diapositivas se mostrarán al mismo tiempo
  slidesPerView: 3,

  // Habilita el bucle infinito, haciendo que el slider vuelva al inicio después de la última diapositiva
  loop: true,

  // Espacio entre las diapositivas, definido en píxeles
  spaceBetween: 40,

  // Configura los puntos de interrupción (breakpoints) para el diseño responsivo
  breakpoints: {
      0: {
          slidesPerView: 1, // En dispositivos pequeños (ancho >= 0px), muestra 1 diapositiva
      },
      550: {
          slidesPerView: 2, // En dispositivos con ancho >= 550px, muestra 2 diapositivas
      },
      800: {
          slidesPerView: 3, // En dispositivos con ancho >= 800px, muestra 3 diapositivas
      },
      1000: {
          slidesPerView: 3, // En dispositivos con ancho >= 1000px, también muestra 3 diapositivas
      },
  },

  // Configuración de la paginación
  pagination: {
      el: ".swiper-pagination", // Selecciona el elemento que actuará como la paginación
      clickable: true, // Permite que los puntos de la paginación sean clicables
  },

  // Configuración de los controles de navegación
  navigation: {
      nextEl: ".swiper-button-next", // Selecciona el botón "siguiente" del slider
      prevEl: ".swiper-button-prev", // Selecciona el botón "anterior" del slider
  },
});
