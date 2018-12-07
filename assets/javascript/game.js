


$(document).ready(function () {


    var randomNumber = Math.floor(Math.random() * 120) + 19;
    $("#numberGuess").text(randomNumber);

    var yourScore = "";
    $("#your-score").text(yourScore = 0);

    var wins = "";
    $("#wins-text").text(wins = 0);

    var livesLeft = "";
    $("lives-text").text(livesLeft = 5);

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
        $("#your-score").text(yourScore);

        if (yourScore === randomNumber) {

            $("#wins-text").text(wins += 1);

            $("#your-score").text(yourScore = 0);

            randomNumber = Math.floor(Math.random() * 120) + 19;
            $("#numberGuess").text(randomNumber);

            var crystal = $(".crystal-img");
            crystal.each(function () {
                var random = Math.floor(Math.random() * 12) + 1;
                console.log(random);
                $(this).attr({
                    "data-crystal": random
                });
            });
            alert("You win!");

            if (wins === 5) {
                $("lives-text").text(livesLeft = 5);
                $("#wins-text").text(wins = 0);
                $("#your-score").text(yourScore = 0);
                var crystal = $(".crystal-img");
                crystal.each(function () {
                    var random = Math.floor(Math.random() * 12) + 1;
                    console.log(random);
                    $(this).attr({
                        "data-crystal": random
                    });

                });
                alert("You are the Crystal Master");
            }

        }


        else if (yourScore >= randomNumber) {

            $("#lives-text").text(livesLeft -= 1);

            $("#your-score").text(yourScore = 0);

            randomNumber = Math.floor(Math.random() * 120) + 19;
            $("#numberGuess").text(randomNumber);

            var crystal = $(".crystal-img");
            crystal.each(function () {
                var random = Math.floor(Math.random() * 12) + 1;
                console.log(random);
                $(this).attr({
                    "data-crystal": random
                });
            });

            alert("You lose!");

            if (livesLeft === 0) {
                $("lives-text").text(livesLeft = 5);
                $("#wins-text").text(wins = 0);
                $("#your-score").text(yourScore = 0);
                randomNumber = Math.floor(Math.random() * 120) + 19;
                $("#numberGuess").text(randomNumber);
                alert("You did not achieve Master Crystal Collector status");

                var crystal = $(".crystal-img");
                crystal.each(function () {
                    var random = Math.floor(Math.random() * 12) + 1;
                    console.log(random);
                    $(this).attr({
                        "data-crystal": random
                    });

                });
            }
        }
});

document.getElementById("wins-text").innerHTML = wins;
document.getElementById("lives-text").innerHTML = livesLeft;

});
