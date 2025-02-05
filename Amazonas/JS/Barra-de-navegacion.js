/*========= SHOW MENU =========*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    toggle.addEventListener('click', () => {

        nav.classList.toggle('show-menu')
        
        toggle.classList.toggle('show-icon')
    })
}
showMenu('nav-toggle','nav-menu')

const dropdownItems = document.querySelectorAll('.dropdown__item')

dropdownItems.forEach((item) => {
    const dropdownButton = item.querySelector('.dropdown__button')

    dropdownButton.addEventListener('click', () => {
        const showDropdown = document.querySelector('.show-dropdown')

        toggleItem(item)

        if (showDropdown && showDropdown!= item){
            toggleItem(showDropdown)
        }
    })
})

const toggleItem = (item) => {
    const dropdownContainer = item.querySelector('.dropdown__container')
    if(item.classList.contains('show-dropdown')){
        dropdownContainer.removeAttribute('style')
        item.classList.remove('show-dropdown')
    }else{
        dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
        item.classList.add('show-dropdown')
    }
}

const mediaQuery = matchMedia('(min-width: 1118px)'),
    dropdownContainer = document.querySelectorAll('.dropdown__button')

const removeStyle = () => {
    if(mediaQuery.matches){
        dropdownContainer.forEach((e) =>{
            e.removeAttribute('style')
        })
        
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
