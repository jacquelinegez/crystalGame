$(document).ready(function() {

    //generates a random number
    var randomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    $('#randomNumber').html(randomNumber);

   //sets a random number for each crystal
    var blueCrystal = Math.floor(Math.random() * 12) + 1;
    var greenCrystal = Math.floor(Math.random() * 12) + 1;
    var redCrystal = Math.floor(Math.random() * 12) + 1;
    var yellowCrystal = Math.floor(Math.random() * 12) + 1;

    var wins = 0; 
    var losses = 0;  

    var totalScore = 0;
    $('#totalScore').text(totalScore);

    function win() {
        wins = wins + 1;
        $('#numberWins').text(wins);
        resetTwo();
        reset();
    }

    function lose() {
        losses = losses + 1;
        $('#numberLosses').text(losses);
        resetTwo();
        reset();
    }

    $('#blueCrystal').click(() => {
        totalScore = totalScore + blueCrystal
        $('#totalScore').text(totalScore);
        if (totalScore === randomNumber) {
            win();
            reset();
            resetTwo();
        } else if (totalScore > randomNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#greenCrystal').click(() => {
        totalScore = totalScore + greenCrystal;
        $('#totalScore').text(totalScore);
        if (totalScore === randomNumber) {
            win();
            reset();
            resetTwo();
        } else if (totalScore > randomNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#redCrystal').click(() => {
        totalScore = totalScore + redCrystal;
        $('#totalScore').text(totalScore);
        if (totalScore === randomNumber) {
            win();
            reset();
            resetTwo();
        } else if (totalScore > randomNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#yellowCrystal').click(() => {
        totalScore = totalScore + yellowCrystal;
        $('#totalScore').text(totalScore);
        if (totalScore === randomNumber) {
            win();
            reset();
            resetTwo();
        } else if (totalScore > randomNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    function reset() {
        totalScore = 0;
        $('#totalScore').text(totalScore);
    }

    //resets random number after each game
    function resetTwo() {
        randomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
        $('#randomNumber').html(randomNumber);
        blueCrystal = Math.floor(Math.random() * 12) + 1;
        greenCrystal = Math.floor(Math.random() * 12) + 1;
        redCrystal = Math.floor(Math.random() * 12) + 1;
        yellowCrystal = Math.floor(Math.random() * 12) + 1;
    }
});