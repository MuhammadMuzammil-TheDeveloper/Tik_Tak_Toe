const boxes = document.querySelectorAll(".box");
const restBtn = document.querySelector("#reset-btn");
const newGameBtn = document.querySelector("#new-btn");
const msg = document.querySelector("#msg");
const msgContainer = document.querySelector(".msg-container");
const mainContainer = document.querySelector("#mainContainer");
const modeContainer = document.querySelector(".mode-container");
const modeBtn = document.querySelectorAll(".mode-btn");
const playerForm = document.querySelector("#playerForm");
const startBtn = document.querySelector(".start-btn");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
let turnO = true;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

function resetGame() {
  turnO = true;
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  msgContainer.classList.add("hide");
  mainContainer.classList.remove("hide");
  modeContainer.classList.add("hide");

  console.log("working ..");
}
newGameBtn.addEventListener("click", resetGame);
restBtn.addEventListener("click", resetGame);

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("click");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
console.log(player1);
console.log(player2);
const showWinner = (winner) => {
  if (winner == "O") {
    msg.innerText = `Congratulation! Winner is ${player1.value}`;
  } else {
    msg.innerText = `Congratulation! Winner is ${player2.value}`;
  }
  msgContainer.classList.remove("hide");
  disabledBoxes();
};

const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    console.log(pos1Val);
    console.log(pos2Val);
    console.log(pos3Val);
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log(`win ${pos1Val}`);
        showWinner(pos1Val);
        mainContainer.classList.add("hide");
        return;
      } else {
        checkDraw();
      }
    }
  }
};

const checkDraw = () => {
  let filled = 0;
  boxes.forEach((box) => {
    if (box.innerText != "") {
      filled++;
    }
    if (filled == 9) {
      msg.innerText = `The Match is draw`;
      msgContainer.classList.remove("hide");
      mainContainer.classList.add("hide");
    }
  });
};

const checkMode = () => {
  console.log(modeContainer);
  modeContainer.classList.add("hide");
  // modeContainer.className.add('hide')
  playerForm.classList.remove("hide");
  console.log(`working....`);
};
modeBtn.forEach((btn) => {
  btn.addEventListener("click", checkMode);
});

startBtn.addEventListener("click", () => {
  mainContainer.classList.remove("hide");
  modeContainer.classList.add("hide");
  playerForm.classList.add("hide");
  const player1Name = document.querySelector("#player1").value;
  const player2Name = document.querySelector("#player2").value;
  p1.innerHTML = player1Name;
  p2.innerHTML = player2Name;
  console.log(player1Name);
  console.log(player1.innerText);
  console.log(player2Name);
});

// console.log(startBtn);
