/*========= SHOW MENU =========*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    toggle.addEventListener('click', () => {

        // add show-menu class to nav menu
        nav.classList.toggle('show-menu')
        
        // add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
}
showMenu('nav-toggle','nav-menu')

/*========= SHOW DROPDOWN MENU =========*/
const dropdownItems = document.querySelectorAll('.dropdown__item')

// 1. Select each dropdown item
dropdownItems.forEach((item) => {
    const dropdownButton = item.querySelector('.dropdown__button')

    // 2. Select each dropdown click
    dropdownButton.addEventListener('click', () => {
        //7. Select the current show-dropdown class
        const showDropdown = document.querySelector('.show-dropdown')

        // 5. Call the toggleItem function
        toggleItem(item)

        // 8. Remove the show dropdown class from other items
        if (showDropdown && showDropdown!= item){
            toggleItem(showDropdown)
        }
    })
})

// 3. Create a function to display the dropdown 
const toggleItem = (item) => {
    // 3.1 Select each dropdown content
    const dropdownContainer = item.querySelector('.dropdown__container')
    // 6. If the same item contains the show-dropdown class, remove it
    if(item.classList.contains('show-dropdown')){
        dropdownContainer.removeAttribute('style')
        item.classList.remove('show-dropdown')
    }else{
    // 4. add the maximun height to the dropdown content and add the show-dropdown class
        dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
        item.classList.add('show-dropdown')
    }
}

/*========= DELETE DROPDOWN STYLES =========*/
const mediaQuery = matchMedia('(min-width: 1118px)'),
    dropdownContainer = document.querySelectorAll('.dropdown__button')

// Function to remove dropdown styles in mobile mode when browser resizes
const removeStyle = () => {
    // Validate if the media query reaches 1118px
    if(mediaQuery.matches){
        // Romeve the dropdown container height style
        dropdownContainer.forEach((e) =>{
            e.removeAttribute('style')
        })
        
        // Remove the show-dropdown class from dropdown item
        dropdownItems.forEach((e) =>{
            e.classList.remove('show-dropdown')
        })
    }
}
addEventListener('resize', removeStyle)

//=============================================================
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
