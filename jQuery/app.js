$(document).ready(function() {
    // numOne
    let buttonForNumOne = $("<button>Click Me</button>");

    $("#numOne").append(buttonForNumOne);
    $("#numOne").click(function() {
        alert("This is my nice messge...\nhehehehe");
    })

    // numTwo
    $("#buttonForNumTwo").click(function() {
        console.log($("#someTextInputBox").val());
    })


})