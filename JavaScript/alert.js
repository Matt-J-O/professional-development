'use strict'; //Enables mordern JS stuff. Auto enabled with classes + modules

function alertSample() {
    alert("This is an alert. It just contains a message");
}

function confirmSample() {
    let question = confirm("This is confirm. It asks a question you can respond yes or no to.");
    alert(`You answered: ${question}`);
}

function promptSample() {
    let result = prompt("This is a prompt it asks for a responce", ["This is a default value"]);
    alert(`You can you $ and {}s to show that you responded: ${result}`);
}

function logSample() {
    console.log("This is a log message, it displays in the console, not on the page. It's pirmarly for debugging purposes.");
    
}

function writeSample() {
    document.write("Document.write() clears the screen and replaces it with whatever in the parenthesis. Useful for debugging, but be careful. Refresh to reset the page.")
}

function bgFlashbang() {
    bg = document.getElementById("bg").style;
    bg.color = "black";
    bg["background-color"] = "white";
}

function bgRevert() {
    bg = document.getElementById("bg").style;
    bg.color = "white";
    bg["background-color"] = "gray";
}