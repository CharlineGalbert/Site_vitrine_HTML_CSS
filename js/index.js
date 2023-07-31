// console.error('Je suis connecté');  pour afficher le message en console

let burgerBtn = document.querySelector('.link-burger'); 
//on récupère l'élément HTML balise a pour pouvoir ajouter la classe open au click

let navbarLinks = document.querySelector('.navbar-links ul');
//on récupère l'élément HTML balise ul avec le menu pour ajouter la class open au click sur l'élément burgerBtn

if (burgerBtn && navbarLinks) { //si burgerBtn et navbarLinks sont non nuls faire ...
    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('open');
        navbarLinks.classList.toggle('open');
    });
}