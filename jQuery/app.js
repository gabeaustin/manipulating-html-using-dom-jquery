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
        $(this).css("background-color", "#355e3b");
    })

    $("#numThree").mouseleave(function() {
        $(this).css("background-color", "#cfcfcf");
    })

    // numFour
    let safeColors = ["00", "33", "66", "99", "cc", "ff"];
    let rand = function() {
        return Math.floor(Math.random()*6);
    };
    
    let randomColor = function() {
        let g = safeColors[rand()];
        let r = safeColors[rand()];
        let b = safeColors[rand()];
        return "#"+r+g+b;
    };

    $('#numFourPara').click(function() {
        $(this).css("color", randomColor());
    });
    
    

})