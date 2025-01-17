// Seleccionamos el botón y los iconos
const button = document.querySelector(".Button_open_close");
const openIcon = document.getElementById("OPEN");
const closeIcon = document.getElementById("CLOSE");

// Inicializamos el estado: Puerta abierta
openIcon.classList.add("show");
button.classList.add("open"); // Verde inicialmente

// Alternar iconos y fondo al hacer clic
button.addEventListener("click", () => {
    // Alternamos las clases de los iconos
    openIcon.classList.toggle("show");
    closeIcon.classList.toggle("show");

    // Alternamos las clases del fondo del botón
    if (button.classList.contains("open")) {
        button.classList.remove("open");
        button.classList.add("closed"); // Rojo para puerta cerrada
    } else {
        button.classList.remove("closed");
        button.classList.add("open"); // Verde para puerta abierta
    }
});
