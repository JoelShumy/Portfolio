let boutonFerme = document.querySelector('.close_button')
let boutonMenu = document.querySelector('.open_button')
let menuBurger = document.querySelector('.burger_menu')

let boutonBurger = document.querySelectorAll('.burger_button > a')

function afficher () {
        boutonMenu.classList.add('inactive')
        menuBurger.classList.remove('inactive')
        boutonFerme.classList.remove('inactive')
}

function fermer () {
    menuBurger.classList.add('inactive')
    boutonFerme.classList.add('inactive')
    boutonMenu.classList.remove('inactive')
};

boutonMenu.addEventListener('click', afficher);

boutonFerme.addEventListener('click', fermer);

boutonBurger.forEach(bouton => {
    bouton.addEventListener('click', fermer)    
})
