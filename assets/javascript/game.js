

$(document).ready(function () {

    var randomNumber = Math.floor(Math.random() * 160) + 1;
    $("#numberGuess").text(randomNumber);

    var yourScore = 0;
    $("#your-score").text(yourScore);

    var crystal = $(".crystal-img");
    crystal.each(function () {
        var random = Math.floor(Math.random() * 12) + 1;
        console.log(random);
        $(this).attr({
            "data-crystal": random
        });

    });

    $(".crystal-img").on("click", function () {
        var crystalValue = ($(this).attr("data-crystal"));

        crystalValue = parseInt(crystalValue);

        yourScore += crystalValue;

        if (yourScore === randomNumber) {
            
        }

        else if (yourScore >= randomNumber) {
            
        }
        console.log(yourScore);
    });
});