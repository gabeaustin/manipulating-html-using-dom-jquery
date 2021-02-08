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

    $("#numFourPara").click(function() {
        $(this).css("color", randomColor());
    });

    // numFive
    $("#btnClickForName").click(function() {
        $("#nameDisplay").append("<span>I'm Gabriel, but most call me Gabe.</span>")
    });

    // numSix
    let friendsArray = ["Noah", "Alex", "Ricky", "Chance", "Wade", "Trey", "Eddie", "Guy", "Junito", "Brandy"];
    let counter = 0;
    $("#btnToAddFriends").click(function() {
        if (friendsArray[counter] != undefined){
            let friendsLi = $(`<li>${friendsArray[counter]}</li>`);
            $("#friendsList").append(friendsLi);
        } else {
            alert("That's All Folks!");
        }
        counter++;;
    });
})