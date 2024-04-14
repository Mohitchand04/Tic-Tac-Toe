let buttons = document.querySelectorAll(".btn");
let reset = document.querySelector("#reset-btn");
let newGame = document.querySelector(".new-game");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let turnX = true; // to check whose turn it is
let count = 0; // to track if all are filled
const winner = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(turnX){
            btn.innerText = "X";
            turnX = false;
        }else{
            btn.innerText = "O";
            turnX = true;
        }
        btn.disabled = true;
        count++;

        let check = isWinner();
        if(count===9 && !check){
            draw();
        }
    });
});

const resetGame = () => {
    turnX = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
  };

const enableBoxes = () =>{
    for(let btn of buttons){
        btn.innerText = "";
        btn.disabled = false;
    }

}

const disableBoxes = () =>{
    for(let btn of buttons){
        btn.disabled = true;
    }
}

const draw = ()=>{
    msg.innerText = " Game was a draw";
    msgContainer.classList.remove("hide");
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };

let isWinner = () => {
    for(let win of winner){
        let val1 = buttons[win[0]].innerText;
        let val2 = buttons[win[1]].innerText;
        let val3 = buttons[win[2]].innerText;

        if(val1!="" && val2!="" && val3!=""){
            if(val1===val2 && val2===val3){
                showWinner(val1);
                return true;
            }
        }
    }
}

reset.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);
