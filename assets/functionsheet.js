let optionAnswers = {
    'rock': 'assets/images/rock.png',
    'paper': 'assets/images/paper.png',
    'scissors': 'assets/images/scissors.png',
    'lizard': 'assets/images/lizard.png',
    'spock': 'assets/images/spock.png',
};

let SCORE = 0;

function pickAnOption(option) {
    console.log(option);
    let options = document.querySelector('.game-area');
    options.style.display = 'none';

    let result = document.querySelector('.result-screen').style.display = 'flex';

    document.getElementById('answer').src = optionAnswers[option];

    let compOption = opponentOption();
    decision(option, compOption);

}

function opponentOption() {
    let options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    let compOption = options[Math.floor(Math.random() * 5)];

    document.getElementById('comp-answer').src = optionAnswers[compOption];

    return compOption;
}

function decision(option, compOption) {

    if (option == 'rock' && compOption == 'paper') {
        finalResult('PAPER COVERS ROCK');
    } else if (option == 'rock' && compOption == 'scissors') {
        finalResult('ROCK CRUSHES SCISSORS');
        setScore(SCORE + 1);
    }

    if (option == 'rock' && compOption == 'spock') {
        finalResult('SPOCK VAPORIZES ROCK');
    } else if (option == 'rock' && compOption == 'lizard') {
        finalResult('ROCK CRUSHES LIZARD');
        setScore(SCORE + 1);
    }

    if (option == 'paper' && compOption == 'scissors') {
        finalResult('SCISSORS CUT PAPER');
    } else if (option == 'paper' && compOption == 'rock') {
        finalResult('PAPER COVERS ROCK');
        setScore(SCORE + 1);
    }

    if (option == 'paper' && compOption == 'lizard') {
        finalResult('LIZARD EATS PAPER');
    } else if (option == 'paper' && compOption == 'spock') {
        finalResult('PAPER DISPROVES SPOCK');
        setScore(SCORE + 1);
    }

    if (option == 'scissors' && compOption == 'rock') {
        finalResult('ROCK CRUSHES SCISSARS');
    } else if (option == 'scissors' && compOption == 'paper') {
        finalResult('SCISSORS CUT PAPER');
        setScore(SCORE + 1);
    }

    if (option == 'scissors' && compOption == 'spock') {
        finalResult('SPOCK SMASHES SCISSORS');
    } else if (option == 'scissors' && compOption == 'lizard') {
        finalResult('SCISSORS DECAPITATE LIZARD');
        setScore(SCORE + 1);
    }

    if (option == 'lizard' && compOption == 'rock') {
        finalResult('ROCK CRUSHES LIZARD');
    } else if (option == 'lizard' && compOption == 'paper') {
        finalResult('LIZARD EATS PAPER');
        setScore(SCORE + 1);
    }

    if (option == 'lizard' && compOption == 'scissors') {
        finalResult('SCISSORS DECAPITATE LIZARD');
    } else if (option == 'lizard' && compOption == 'spock') {
        finalResult('LIZARD POISONS SPOCK');
        setScore(SCORE + 1);
    }

    if (option == 'spock' && compOption == 'lizard') {
        finalResult('LIZARD POISONS SPOCK');
    } else if (option == 'spock' && compOption == 'rock') {
        finalResult('SPOCK VAPORISES ROCK');
        setScore(SCORE + 1);
    }

    if (option == 'spock' && compOption == 'paper') {
        finalResult('PAPER DISPROVES SPOCK');
    } else if (option == 'spock' && compOption == 'scissors') {
        finalResult('SPOCK CRUSHES SCISSORS');
        setScore(SCORE + 1);
    }

    if (option == 'spock' && compOption == 'spock') {
        finalResult("IT'S A TIE");
    }

    if (option == 'rock' && compOption == 'rock') {
        finalResult("IT'S A TIE");
    }

    if (option == 'paper' && compOption == 'paper') {
        finalResult("IT'S A TIE");
    }

    if (option == 'scissors' && compOption == 'scissors') {
        finalResult("IT'S A TIE");
    }

    if (option == 'lizard' && compOption == 'lizard') {
        finalResult("IT'S A TIE");
    }

}

function restartGame() {
    let result_screen = document.querySelector('.result-screen');
    result_screen.style.display = 'none';

    let game_area = document.querySelector('.game-area');
    game_area.style.display = 'flex';
}

function finalResult(decision) {
    document.querySelector(".result-message h1").innerText = decision;
}

function setScore(score) {
    SCORE = score;
    document.querySelector(".score h1").innerText = score;
}