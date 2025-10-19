console.log("Walcome To Tic Tac toe")
let over = new Audio("over.wav")
let turn = "X"
let gameover = false;

//Function to change the turn
const changeTurn = () => {
    return turn === "X"?"0" : "X"
}
//Function to check to a win
const checkwin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    win.forEach(e => {
        if (
            boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[0]].innerText !== ""
        ) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won";
            gameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
        }
    })
}

// game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            checkwin();
            over.play();
            chackwin();
            if (!gameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})
//Add onclick listener to reset button
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"
    gameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})
