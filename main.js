/* Consegna:

BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay. */

const arrowDownHtml = document.querySelector('.fa-chevron-down')
const arrowUpHtml = document.querySelector('.fa-chevron-up')

const figureHtml = document.querySelector('figure')

console.log( figureHtml )

const imagesSeeds = [
    {
        name : "First Photo",
        desc : "This is the first image of the carousel",
        image : "https://picsum.photos/seed/200/400/300"
    },
    {
        name : "Second Photo",
        desc : "This is the second image of the carousel",
        image : "https://picsum.photos/seed/300/400/300"
    },
    {
        name: "Third Photo",
        desc: "This is the third image of the carousel",
        image : "https://picsum.photos/seed/400/400/300"
    },
    {
        name: "Fourth Photo",
        desc: "This is the fourth image of the carousel",
        image : "https://picsum.photos/seed/500/400/300"
    },
    {
        name: "Fifth Photo",
        desc: "This is the fifth image of the carousel",
        image : "https://picsum.photos/seed/600/400/300"
    }
];


/*Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.*/

for( let i = 0; i < imagesSeeds.length; i++ ){
    if( i === 0 ){
        figureHtml.innerHTML += `
            <img class="active" src="${imagesSeeds[i].image}" alt="immagini carosello">
            <h2 class="active">${imagesSeeds[i].name}</h2>
            <p class="active">${imagesSeeds[i].desc}</p>
              `
         
    } else {
        figureHtml.innerHTML += `
        <img src="${imagesSeeds[i].image}" alt="immagini carosello">
        <h2>${imagesSeeds[i].name}</h2>
        <p>${imagesSeeds[i].desc}</p>
          `
    }    
}

/*Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.*/

let immagineCorrente = 0

arrowUpHtml.addEventListener( "click", function(){
    
    let arrayTagsImmagini = document.querySelectorAll( 'figure img' )
    let arrayTagsTitoli = document.querySelectorAll( 'figure h2' )
    let arrayTagsDesc = document.querySelectorAll( 'figure p' )
        
    arrayTagsImmagini[immagineCorrente].classList.remove( 'active' )
    arrayTagsTitoli[immagineCorrente].classList.remove( 'active' )
    arrayTagsDesc[immagineCorrente].classList.remove( 'active' )

    if( immagineCorrente == 0 ){
        immagineCorrente = arrayTagsImmagini.length - 1
    } else {
        immagineCorrente--
    }

    arrayTagsImmagini[immagineCorrente].classList.add( 'active' )
    arrayTagsTitoli[immagineCorrente].classList.add( 'active' )
    arrayTagsDesc[immagineCorrente].classList.add( 'active' )
    
} )

arrowDownHtml.addEventListener( "click", function(){

    let arrayTagsImmagini = document.querySelectorAll( 'figure img' )
    let arrayTagsTitoli = document.querySelectorAll( 'figure h2' )
    let arrayTagsDesc = document.querySelectorAll( 'figure p' )
        
    arrayTagsImmagini[immagineCorrente].classList.remove( 'active' )
    arrayTagsTitoli[immagineCorrente].classList.remove( 'active' )
    arrayTagsDesc[immagineCorrente].classList.remove( 'active' )

    if( immagineCorrente == arrayTagsImmagini.length - 1 ){
        immagineCorrente = 0
    } else {
        immagineCorrente++
    }

    arrayTagsImmagini[immagineCorrente].classList.add( 'active' )
    arrayTagsTitoli[immagineCorrente].classList.add( 'active' )
    arrayTagsDesc[immagineCorrente].classList.add( 'active' )

} )
