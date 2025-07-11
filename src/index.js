//import Typewriter from 'typewriter-effect/dist/core';

let poemFormElement = document.querySelector("#poem-form");


function generatePoem(event){
    event.preventDefault();
    let poemContainer = document.querySelector(".poem-btn");
    poemContainer.innerHTML = "This is a poem";
    

    new Typewriter("#poem-form", {
    strings: ["Roses are red"],
    autoStart: true,
    delay: 1,
    cursor: "",
    });
}

poemFormElement.addEventListener("submit", generatePoem);
