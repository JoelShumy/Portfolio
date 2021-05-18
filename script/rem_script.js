let ecranBoutons = document.getElementsByClassName('bouton');


function afficher () {
    /* enlever l'écran actuel  */
    /* afficher le nouvel écran  */
}

ecranBoutons.forEach(bouton => {
    bouton.addEventListener('click', afficher)    
})