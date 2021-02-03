document.addEventListener("DOMContentLoaded", function () {
    let divForNumOne = document.createElement("div");
    let divForNumTwo = document.createElement("div");
    let divForNumThree = document.createElement("div");
    let divForNumFour = document.createElement("div");
    let divForNumFive = document.createElement("div");
    let divForNumSix = document.createElement("div");
    let mainDiv = document.createElement("div");
    let button = document.createElement("button");
    let userInputBtn = document.getElementById("displayUserInputBtn");
    let buttonText = document.createTextNode("Click Me!");

    button.appendChild(buttonText);
    document.body.appendChild(mainDiv);
    document.body.appendChild(button);
    mainDiv.appendChild(button);
    // mainDiv.appendChild(divForNumOne);
    document.getElementById("num1").appendChild(divForNumOne);
    mainDiv.appendChild(divForNumTwo);
    mainDiv.appendChild(divForNumThree);
    mainDiv.appendChild(divForNumFour);
    mainDiv.appendChild(divForNumFive);
    mainDiv.appendChild(divForNumSix);
    
    // Num 1
    button.addEventListener("click", function() {
        // alert(userText.value);
        console.log("nice message");
    })

    // Num 2
    userInputBtn.addEventListener("click", function() {
        // change to an alert
        // alert(userText.value); // remove this line before deploying
        console.log(userText.value); 
    })

    let numOne = document.getElementById("num1");
    mainDiv.appendChild(numOne);

    let numTwo = document.getElementById("num2");
    mainDiv.appendChild(numTwo);

    let numThree = document.getElementById("num3");
    mainDiv.appendChild(numThree);

    let numFour = document.getElementById("num4");
    mainDiv.appendChild(numFour);

    let numFive = document.getElementById("num5");
    mainDiv.appendChild(numFive);

    let numSix = document.getElementById("num6");
    mainDiv.appendChild(numSix);



})


