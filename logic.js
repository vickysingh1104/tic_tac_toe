let boxes=document.querySelectorAll(".box")
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0 = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click", () => {
        if(turn0){
        box.innerText = "0";
        turn0 = false;
        
        } else {
            box.innerText ="X"
            turn0=true;
        }
        box.disalbled = true;

        checkWinner();
    });
});

const disableboxes =()=>{
    for (let box of boxes){
        box.disalbled = true;
    }
}

const enableboxes =()=>{
    for (let box of boxes){
        box.disalbled = false;
        box.innerText="";
    }
}

const showWinner = (winner)=> {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    box.disalbled();

}

const checkWinner =()=> {
    for(let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText
        let pos2Val = boxes[pattern[1]].innerText
        let pos3val = boxes[pattern[2]].innerText

        if (pos1Val != "" && pos2Val != "" && pos3val!= ""){
            if(pos1Val === pos2Val && pos2Val=== pos3val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame)
resetBtn.addEventListener("click",resetGame)
