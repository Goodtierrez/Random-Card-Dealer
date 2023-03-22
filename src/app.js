window.onload = function() {
  //write your code here

  let suite = ["♦", "♥", "♠", "♣"];
  let numbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  let numberMain = document.querySelector(".number");
  let suiteA = document.querySelector(".top-suite");
  let suiteB = document.querySelector(".bottom-suite");

  function randomNumber() {
    return Math.floor(Math.random() * numbers.length);
  }
  let number = numbers[randomNumber()];

  numberMain.innerHTML = number;

  function randomSuite() {
    return Math.floor(Math.random() * suite.length);
  }

  let suiteMain = suite[randomSuite()];

  suiteA.innerHTML = suiteMain;
  suiteB.innerHTML = suiteMain;

  if (suiteMain === "♦" || suiteMain === "♥") {
    numberMain.classList.add("red");
    suiteA.classList.add("red");
    suiteB.classList.add("red");
  }
};
