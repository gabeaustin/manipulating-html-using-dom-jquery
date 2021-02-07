$(document).ready(function() {
    let buttonForNumOne = $("<button>Click Me</button>");

    $("#numOne").append(buttonForNumOne);
    $("#numOne").click(function() {
        alert("This is my nice messge...\nhehehehe");
    })


})