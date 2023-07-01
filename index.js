const wholeGame = () => {
  //Start the Game
  let playerLives = 10;
  let computerLives = 10;
  const startGame = () => {
    const playButton = document.querySelector(".play-button");
    const container = document.querySelector(".container");

    playButton.addEventListener("click", () => {
      container.classList.remove("fadeOut");
      container.classList.add("fadeIn");
      console.log(container.classList);
    });
  };
  //Play Match
  const playMatch = () => {
    const optionImages = document.querySelectorAll(".option-images button");
    const playerHand = document.querySelector(".player-hand img");
    const computerHand = document.querySelector(".computer-hand img");

    //generate random number for ccomputer hand

    const computerOptions = ["rock", "paper", "scissors"];

    optionImages.forEach((option) => {
      option.addEventListener("click", function () {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        playerHand.src = "/assets/" + this.textContent + ".png";

        computerHand.src = "/assets/" + computerChoice + ".png";
        compareHands(this.textContent, computerChoice);
      });
    });
  };

  const updateLives = () => {
    let player = document.querySelector(".player-lives p");
    let computer = document.querySelector(".computer-lives p");
    player.textContent = playerLives;
    computer.textContent = computerLives;
    console.log(player.textContent);
  };

  //Compare the hands of both player and computer
  const compareHands = (playerChoice, computerChoice) => {
    const result = document.querySelector(".result");
    if (playerLives === 0 || computerLives === 0) {
      if (playerLives === 0) {
        return (result.textContent = "YOU LOSE! YOU NOOB!");
      }
      if (computerLives === 0) {
        return (result.textContent = " YOU WIN! GOOD JOB!");
      }

      return;
    }
    if (playerChoice === computerChoice) {
      result.textContent = "IT IS A TIE!";
      return;
    }
    //check for rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        result.textContent = "PLAYER WINS!";
        computerLives--;
        updateLives();

        return;
      } else {
        result.textContent = "COMPUTER WINS!";
        playerLives--;
        updateLives();

        return;
      }
    }
    //Check for paper
    if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        result.textContent = "PLAYER WINS!";
        computerLives--;
        updateLives();

        return;
      } else {
        result.textContent = "COMPUTER WINS!";
        playerLives--;
        updateLives();

        return;
      }
    }
    //check for scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "paper") {
        result.textContent = "PLAYER WINS!";
        computerLives--;
        updateLives();

        return;
      } else {
        result.textContent = "COMPUTER WINS!";
        playerLives--;
        updateLives();

        return;
      }
    }
  };

  startGame();
  playMatch();
};

wholeGame();
