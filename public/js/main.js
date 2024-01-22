const info = document.querySelector(".infos") // J'appelle ma class "infos" et je lui attribue une variable "info"

const allBtns = document.querySelectorAll(input[type="button"]) // J'appelle tout mes " input de type 'btn' " et je lui attribue une variable "allBtns"

function val(resultat) { // J'appelle la  fonction "val" qui prend en paramétre le résultat.
    form.fenetre.value = form.fenetre.value + resultat // Cette fonction est appeler a chaque fois qu'on click sur un btn et va afficher le chiffre ou l'operateur que l'utlisateur va entrer. 
}

function calcule() { // Cette function calcule :
    if (form.fenetre.value == "") { // Si l'utilisateur ne rentre aucun chiffre et appuie sur egal alors :
        info.innerText = `Veuillez entrer un chiffre :`; // Il ya un message qui s'affiche demandant de rentrer un chiffre !
        allBtns.forEach(btn => { 
            btn.addEventListener('click', function() {
                info.innerText = "" // J'utilise un ecouteur d'événements pour que au click du "btn" le caractere s'affiche dans la calculatrice !
            })
        })
    } else { 
        form.fenetre.value = eval(form.fenetre.value) // Sinon cela va afficher le resultat !
    }
}

function suppr() {
    form.fenetre.value = ""; // Cette function supprime les caractere de la calculatrice et reste vide.
}



// Bonne appetit !