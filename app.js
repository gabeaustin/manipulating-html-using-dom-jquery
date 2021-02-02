document.addEventListener("DOMContentLoaded", function () {
    let divForButton = document.createElement("div");
    let button = document.createElement("button");
    let buttonText = document.createTextNode("Click Me!");

    button.appendChild(buttonText);
    divForButton.appendChild(button);
    
    document.body.appendChild(divForButton);
    document.body.appendChild(button);

    button.addEventListener("click", function() {
        alert("Do you like my (nice) message!?");
    })

})


