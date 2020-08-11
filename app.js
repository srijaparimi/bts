document.addEventListener("DOMContentLoaded", () => {
  //card decleration
  const cardArray = [
    {
      name: "1",
      img: "c/1.png",
    },
    {
      name: "1",
      img: "c/1.png",
    },
    {
      name: "2",
      img: "c/2.png",
    },
    {
      name: "2",
      img: "c/2.png",
    },
    {
      name: "3",
      img: "c/3.png",
    },
    {
      name: "3",
      img: "c/3.png",
    },
    {
      name: "4",
      img: "c/4.png",
    },
    {
      name: "4",
      img: "c/4.png",
    },
    {
      name: "5",
      img: "c/5.png",
    },
    {
      name: "5",
      img: "c/5.png",
    },
    {
      name: "6",
      img: "c/6.png",
    },
    {
      name: "6",
      img: "c/6.png",
    },
    {
      name: "7",
      img: "c/7.png",
    },
    {
      name: "7",
      img: "c/7.png",
    },
    {
      name: "8",
      img: "c/8.png",
    },
    {
      name: "8",
      img: "c/8.png",
    },
    {
      name: "9",
      img: "c/9.png",
    },
    {
      name: "9",
      img: "c/9.png",
    },
  ];
  cardArray.sort(() => 0.5 - Math.random());
  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];
  var cardsfin = [];

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "c/10.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipcard);
      grid.appendChild(card);
    }
  }

  // check for match
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].setAttribute("src", "c/11.png");
      cards[optionTwoId].setAttribute("src", "c/11.png");
      cardsWon.push(cardsChosen);
      cardsfin.push(cardsChosen[0]);
    } else {
      cards[optionOneId].setAttribute("src", "c/10.png");
      cards[optionTwoId].setAttribute("src", "c/10.png");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "CONGRADULATIONS ARMY YOU HAVE WON";
      window.location = "fin.html";
    }
  }

  // flip card
  function flipcard() {
    var f = 0;
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
