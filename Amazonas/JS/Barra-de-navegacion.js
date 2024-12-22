document.querySelectorAll(".menu > ul > li").forEach(function (menuItem) {
    menuItem.addEventListener("click", function (e) {
        // Check if the clicked menu item is already active
        const isActive = menuItem.classList.contains("active");

        // Remove "active" class from all sibling elements and hide their sub-menus
        menuItem.parentElement.querySelectorAll("li").forEach(function (sibling) {
            sibling.classList.remove("active");
            sibling.querySelectorAll(".sub-menu").forEach(function (subMenu) {
                subMenu.style.display = "none";
            });
        });

        // If the clicked menu item was not active, activate it and show its sub-menu
        if (!isActive) {
            menuItem.classList.add("active");
            let subMenu = menuItem.querySelector(".sub-menu");
            if (subMenu) {
                subMenu.style.display = "block";
            }
        }
    });
});

document.querySelector(".menu-btn").addEventListener("click", function () {
    const sidebar = document.querySelector(".sidebar");
    const userDetails = document.querySelector(".user-details");
    const menuTexts = document.querySelectorAll(".menu .text");

    // Alternar la clase 'reduced' en el sidebar
    sidebar.classList.toggle("reduced");

    // Alternar la visibilidad del texto en la parte superior
    if (sidebar.classList.contains("reduced")) {
        userDetails.style.display = "none";
    } else {
        userDetails.style.display = "block";
    }

    // Alternar la visibilidad del texto en los menús
    menuTexts.forEach(function (text) {
        if (sidebar.classList.contains("reduced")) {
            text.style.display = "none";
        } else {
            text.style.display = "inline-block";
        }
    });
});
