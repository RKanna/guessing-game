let btnAgain = document.getElementById("btnAgain");
let contentScore = Number(document.getElementById("dynamicData2").value);
let reduceByOne = Number(contentScore.innerHTML);
let emojiElement = document.getElementById("emojisEle");
let maskedElement = document.getElementById("mask");
let emojiLostElement = document.getElementById("emojiLost");
let highScore = Number(document.getElementById("dynamicData3").value);
maskedElement.style.display = "flex";
emojiElement.style.display = "none";
emojiLostElement.style.display = "none";
function randomNumber() {
  let randomNum = Math.floor(Math.random() * 100 + 1);
  return randomNum;
}
let fixedRandomNumber = randomNumber();
console.log(fixedRandomNumber);

btnCheck.addEventListener("click", function (event) {
  let inputEle = Number(document.getElementById("textField").value);
  let btnCheck = document.getElementById("btnCheck");
  let contentElement = document.getElementById("dynamicData1");
  let contentScore = Number(document.getElementById("dynamicData2").innerText);
  let emojiElement = document.getElementById("emojisEle");
  if (inputEle > fixedRandomNumber) {
    if (
      inputEle - fixedRandomNumber <= 10 &&
      inputEle - fixedRandomNumber >= 1
    ) {
      contentElement.innerText = "Guessed Number is high";
      console.log("Guessed Number is too high");
    } else {
      contentElement.innerText = "Guessed Number is too high";
      console.log("Guessed Number is too high");
    }

    if (contentScore > 0) {
      contentScore--;
      document.getElementById("dynamicData2").innerText = contentScore;
    }
  } else if (inputEle < fixedRandomNumber) {
    if (
      fixedRandomNumber - inputEle <= 10 &&
      fixedRandomNumber - inputEle >= 1
    ) {
      contentElement.innerText = "Guessed Number is low";
      console.log("Guessed Number is too low");
    } else {
      contentElement.innerText = "Guessed Number is too low";
      console.log("Guessed Number is too low");
    }

    if (contentScore > 0) {
      contentScore--;
      document.getElementById("dynamicData2").innerText = contentScore;
    }
  } else if (inputEle === fixedRandomNumber) {
    console.log("Guessed Number is Correct");
    contentElement.innerText = "Guessed Number is correct";
    document.body.style.backgroundColor = "green";
    maskedElement.style.display = "none";
    emojiElement.style.display = "flex";
    btnCheck.disabled = true;
  }
  if (contentScore === 0) {
    document.body.style.backgroundColor = "red";
    btnCheck.disabled = true;
    maskedElement.style.display = "none";
    emojiElement.style.display = "none";
    emojiLostElement.style.display = "flex";
  }

  let highScore = 20;

  // if (contentScore === 20 && inputEle === fixedRandomNumber) {
  //   document.getElementById("dynamicData3").innerText = 1000;
  // } else if (contentScore === 19 && inputEle === fixedRandomNumber) {
  //   document.getElementById("dynamicData3").innerText = 950;
  // } else if (contentScore === 18 && inputEle === fixedRandomNumber) {
  //   document.getElementById("dynamicData3").innerText = 900;
  // } else if (contentScore === 17 && inputEle === fixedRandomNumber) {
  //   document.getElementById("dynamicData3").innerText = 850;
  // } else if (contentScore === 16 && inputEle === fixedRandomNumber) {
  //   document.getElementById("dynamicData3").innerText = 800;
  // } else if (contentScore === 15 && inputEle === fixedRandomNumber) {
  //   document.getElementById("dynamicData3").innerText = 750;
  // } else if (contentScore === 14 && inputEle === fixedRandomNumber) {
  //   document.getElementById("dynamicData3").innerText = 700;
  // } else if (contentScore === 13 && inputEle === fixedRandomNumber) {
  //   document.getElementById("dynamicData3").innerText = 650;
  // } else if (contentScore === 12 && inputEle === fixedRandomNumber) {
  //   document.getElementById("dynamicData3").innerText = 600;
  // } else if (contentScore === 11 && inputEle === fixedRandomNumber) {
  //   document.getElementById("dynamicData3").innerText = 550;
  // } else if (contentScore === 10 && inputEle === fixedRandomNumber) {
  //   document.getElementById("dynamicData3").innerText = 500;
  // } else if (contentScore === 9 && inputEle === fixedRandomNumber) {
  //   document.getElementById("dynamicData3").innerText = 450;
  // } else if (contentScore === 8 && inputEle === fixedRandomNumber) {
  //   document.getElementById("dynamicData3").innerText = 400;
  // } else if (contentScore === 7 && inputEle === fixedRandomNumber) {
  //   document.getElementById("dynamicData3").innerText = 350;
  // } else if (contentScore === 6 && inputEle === fixedRandomNumber) {
  //   document.getElementById("dynamicData3").innerText = 300;
  // } else if (contentScore === 5 && inputEle === fixedRandomNumber) {
  //   document.getElementById("dynamicData3").innerText = 250;
  // } else if (contentScore === 4 && inputEle === fixedRandomNumber) {
  //   document.getElementById("dynamicData3").innerText = 200;
  // } else if (contentScore === 3 && inputEle === fixedRandomNumber) {
  //   document.getElementById("dynamicData3").innerText = 150;
  // } else if (contentScore === 2 && inputEle === fixedRandomNumber) {
  //   document.getElementById("dynamicData3").innerText = 100;
  // } else if (contentScore === 1 && inputEle === fixedRandomNumber) {
  //   document.getElementById("dynamicData3").innerText = 50;
  // } else if (contentScore === 0) {
  //   document.getElementById("dynamicData3").innerText = 0;
  // }

  const scoreMapping = {
    20: 1000,
    19: 950,
    18: 900,
    17: 850,
    16: 800,
    15: 750,
    14: 700,
    13: 650,
    12: 600,
    11: 550,
    10: 500,
    9: 450,
    8: 400,
    7: 350,
    6: 300,
    5: 250,
    4: 200,
    3: 150,
    2: 100,
    1: 50,
  };

  if (
    scoreMapping.hasOwnProperty(contentScore) &&
    inputEle === fixedRandomNumber
  ) {
    document.getElementById("dynamicData3").innerText =
      scoreMapping[contentScore];
  } else if (contentScore === 0) {
    document.getElementById("dynamicData3").innerText = 0;
  }
});

btnAgain.addEventListener("click", function (event) {
  let inputEle = Number(document.getElementById("textField").value);
  let btnCheck = document.getElementById("btnCheck");
  let contentElement = document.getElementById("dynamicData1");
  let contentScore = Number(document.getElementById("dynamicData2").innerText);
  let emojiElement = document.getElementById("emojisEle");

  document.body.style.backgroundColor = "#232322";
  maskedElement.style.display = "flex";
  emojiElement.style.display = "none";
  emojiLostElement.style.display = "none";
  document.getElementById("dynamicData3").innerText = 0;
  document.getElementById("textField").value = 0;
  document.getElementById("dynamicData1").innerText = "start Guessing...";
  document.getElementById("dynamicData2").innerText = "20";
  btnCheck.disabled = false;

  fixedRandomNumber = randomNumber();
  console.log(fixedRandomNumber);
});
