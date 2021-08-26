// Menu Burger animations

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

// Animation, apparition scroll progressif


// Création d'un observateur d'intersection
const ratio = .2
var options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
  }



  //fonction callback

  const handleIntersect = function (entries, observer) {
      entries.forEach(entry => {
          if (entry.intersectionRatio > ratio) {
            console.log('visible') 
            entry.target.classList.add('reveal-visible') 
            observer.unobserve(entry.target)
          } else {
              console.log('invisible')
          }
          
      })
  }
  
  const observer = new IntersectionObserver(handleIntersect, options);
 
  // On attribue un élément cible à l'observer, ici classe reveal
  document.querySelectorAll('.reveal').forEach( r => {
    observer.observe(r)
  })
  

