let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-btn");
let turn0=true;  //playerx,player0
let winLabel=document.querySelector("#win")
let newGame=document.querySelector("#new-game")
let draw=document.querySelector("#draw");
const winPattern=[
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
    enableBoxes();
    winLabel.style.display="none";
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
let count=0;
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        count++;
        console.log(count)
        console.log(" box clicked")
        if(turn0){
            box.innerText="X";
            box.style.color="red";
            turn0=false;
        }
        else{
            box.innerText="O";
            box.style.color="black";
            turn0=true; 
        }
        box.disabled=true;
        checkWinner();
        if(count==9){
            console.log("draw")
           draw.style.display="block";
           count=0;
        }
    });
    
})
        const disableBoxes=()=>{
            for(let box of boxes){
                box.disabled=true;
            }
        }
const checkWinner=()=>{
    winPattern.forEach((pattern)=>{
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;
        if(val1!=="" && val2!=="" && val3!==""){
            if(val1===val2 && val2===val3){
                console.log("winner ",val1)
                winLabel.style.display="block";
                draw.style.display="none";
                newGame.style.display="inline-block"
                disableBoxes();
            }
        }
    })
}
const newAgain=()=>{
    newGame.style.display="none";
    draw.style.display="none";
    count=0;
}
reset.addEventListener("click",resetGame)
reset.addEventListener("click",newAgain);
newGame.addEventListener("click",resetGame)
newGame.addEventListener("click",newAgain)


