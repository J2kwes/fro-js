"use strict";

// Declare variables
const studentName = "Joey Westenberg";
const studentGroup = "MD2A";
const year = main.year;

// Init
init();

// Functions

function init() {
    // Set content based on variables
    var nameClass = document.getElementsByClassName("studentName");
    for(var i = 0; i < nameClass.length; i++){
        nameClass[i].innerText = studentName;    // Change the content
    }

    var groupClass = document.getElementsByClassName("studentGroup");
    for(var i = 0; i < groupClass.length; i++){
        groupClass[i].innerText = studentGroup;    // Change the content
    }

    var yearClass = document.getElementsByClassName("pageYear");
    for(var i = 0; i < yearClass.length; i++){
        yearClass[i].innerText = year;    // Change the content
    }

    // Add navigation link to the navigation panel on the left of the page
    main.addContenItem("Inleiding", intro);
    // Activate the first navigation link
    intro();
}

function intro() {

    let description = "Je bent in dienst van energiemaatschappij Energy Solutions en"
        + " krijgt de opdracht om een webpagina te maken die de energiestanden toont van een aantal adressen."
        + " De data wordt via een webAPI beschikbaar gesteld. "
        + " Dit gebeurt in kleine stapjes en uiteindelijk is het de bedoeling om de data op een nette manier te presenteren."
        + "<p>Succes!!!</p>";
    main.updateContent("Inleiding", description);

    // Set link to the element in the DOM
    var element = document.getElementById("contentPlaceholder");

    // Create the image and set some properties
    var img = document.createElement("img");
    img.src = "Photo.jpg";
    img.style.width = "100px";

    // Create the label
    var label = document.createElement("label");
    label.innerHTML = "Joey Westenberg";

    // Create the paragraph and add the image and label to it
    var p = document.createElement("p");
    p.appendChild(img);
    p.appendChild(document.createElement("br"));
    p.appendChild(label);
    
    // Add the paragraph to the DOM
    element.appendChild(p); 
}