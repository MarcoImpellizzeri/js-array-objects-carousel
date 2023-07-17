"use strict"

// Dato un array di oggetti letterali con:
//  - url dell’immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata.

const myCaruselContainer = document.querySelector(".my-carusel-container");
const myImgCaruselContainer = document.querySelector(".my-img-carusel-container");
const myTitle = document.querySelector(".my-title");
const myText = document.querySelector(".my-text");

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// Milestone 0:
// Come nel primo carosello realizzato, 
// focalizziamoci prima sulla creazione del markup statico: 
// costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.

// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali 
// per popolare dinamicamente il carosello.
// Al click dell’utente sulle frecce verso sinistra o destra, 
// l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

for (let i = 0; i < images.length; i++) {
    const currentImage = images[i];
    let classActive = "";

    if (i === 0) {
        classActive = "active"
    };

    myCaruselContainer.innerHTML += `<img class="my-img-carusel ${classActive}" src="${currentImage.image}" alt="">`;

    console.log(currentImage.image);
};

// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello.
// Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra,
// la miniatura che deve attivarsi sarà l’ultima e viceversa per
// l’ultima miniatura se l’utente clicca la freccia verso sinistra.

// bisogna mettere qui i button perche` vengono cancellati e ricreati se vengo scritti prima del for
// ma se non si usa .innerHTML si possono scrivere sopra
const leftButton = document.querySelector("#btn-left");
const rightButton = document.querySelector("#btn-right");
let currentImgIndex = 0;

rightButton.addEventListener("click", function () {
    console.log("cliccato right");

    // recupero tutti gli elementi con quella classe
    const imageListElements = document.querySelectorAll(".my-img-carusel");
    console.log(imageListElements[currentImgIndex]);

    // tolgo classe active
    imageListElements[currentImgIndex].classList.remove("active");

    // incremento il contatore
    currentImgIndex++;

    if (currentImgIndex > imageListElements.lenght - 1) {
        currentImgIndex = 0;
    };

    // l'index e aumentato e lo uso per assegnare la classe active
    imageListElements[currentImgIndex].classList.add("active");
});


leftButton.addEventListener("click", function () {
    console.log("cliccato left");

    // recupero tutti gli elementi con quella classe
    const imageListElements = document.querySelectorAll(".my-img-carusel");

    // tolgo classe active
    imageListElements[currentImgIndex].classList.remove("active");

    // incremento il contatore
    currentImgIndex--;

    if (currentImgIndex < 0) {
        currentImgIndex = imageListElements.lenght - 1;
    };

    // l'index e aumentato e lo uso per assegnare la classe active
    imageListElements[currentImgIndex].classList.add("active");
});
