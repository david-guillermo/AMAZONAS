    // Seleccionar todos los enlaces
    const navLinks = document.querySelectorAll('.link-Style');

    // Agregar el evento de clic a cada enlace
    navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Quitar la clase 'active' de todos los enlaces
        navLinks.forEach(nav => nav.classList.remove('active'));
        // Agregar la clase 'active' al enlace clicado
        link.classList.add('active');
    });
});
