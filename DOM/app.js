document.addEventListener("DOMContentLoaded", function () {
    let divForNumTwo = document.createElement("div");
    let divForNumThree = document.createElement("div");
    let divForNumFour = document.createElement("div");
    let divForNumFive = document.createElement("div");
    let divForNumSix = document.createElement("div");
    let mainDiv = document.createElement("div");
    let button = document.createElement("button");
    let userInputBtn = document.getElementById("displayUserInputBtn");
    let buttonText = document.createTextNode("Click Me!");
    let randomColorPara = document.createElement("p");

    button.appendChild(buttonText);
    document.body.appendChild(mainDiv);
    document.body.appendChild(button);
    
    document.body.appendChild(randomColorPara);
    mainDiv.appendChild(button);
    mainDiv.appendChild(divForNumTwo);
    mainDiv.appendChild(divForNumThree);
    mainDiv.appendChild(divForNumFour);
    mainDiv.appendChild(divForNumFive);
    mainDiv.appendChild(divForNumSix);
    // mainDiv.body.appendChild(randomColorPara);

    let numOne = document.getElementById("num1");
    button.addEventListener("click", function () {
        alert("Here is a nice message!! Yeah me!");
        // console.log("nice message");
    })
    mainDiv.appendChild(numOne);


    let numTwo = document.getElementById("num2");
    mainDiv.appendChild(numTwo);
    
    userInputBtn.addEventListener("click", function () {
        // change to an alert
        alert(userText.value); // remove this line before deploying
        // console.log(userText.value);
    })


    let numThree = document.getElementById("num3");
    mainDiv.appendChild(numThree);

    numThree.addEventListener("mouseover", function() {
        mainDiv.style.backgroundColor = "green";
        numThree.style.color = "green";
    })

    numThree.addEventListener("mouseout", function() {
        mainDiv.style.backgroundColor = "initial";
        numThree.style.color = "initial";
    })


    let numFour = document.getElementById("num4");
    // numFour.appendChild(randomColorPara);
    mainDiv.appendChild(numFour);

    let numFive = document.getElementById("num5");
    mainDiv.appendChild(numFive);

    let numSix = document.getElementById("num6");
    mainDiv.appendChild(numSix);



})


