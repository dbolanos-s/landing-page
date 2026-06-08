"use strict";

/**
 * Muestra la notificación interactiva en pantalla
 * Obtiene la referencia del elemento con ID "toast-interactive" y agrega la clase "md:block"
 * 
 * @returns {void}
 */
const showToast = () => {
    const toast = document.getElementById("toast-interactive");
    if (toast) {
        toast.classList.add("md:block");
    }
};

/**
 * Agrega evento de clic al elemento con ID "demo"
 * Abre un enlace de YouTube en una nueva pestaña del navegador
 * 
 * @returns {void}
 */
const showVideo = () => {
    const demo = document.getElementById("demo");
    if (demo) {
        demo.addEventListener("click", () => {
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
        });
    }
};

// Función de autoejecución
(() => {
    alert("¡Bienvenido a la página!");
    console.log("Mensaje de bienvenida mostrado.");
    showToast();
    showVideo();
})();
