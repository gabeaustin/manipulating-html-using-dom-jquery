$(document).ready(function() {
    // numOne
    let buttonForNumOne = $("<button>Click Me</button>");

    $("#numOne").append(buttonForNumOne);
    $("#numOne").click(function() {
        alert("This is my nice messge...\nhehehehe");
    })

    // numTwo
    $("#buttonForNumTwo").click(function() {
        alert($("#someTextInputBox").val());
    })

    // numThree
    $("#numThree").mouseover(function() {
        $("#numThree").css("background-color", "#355e3b");
    })

    $("#numThree").mouseleave(function() {
        $("#numThree").css("background-color", "#cfcfcf");
    })

})