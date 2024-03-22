let track = 0;
let xo = 'x'
const matrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];
let curr = 0;

const game = document.querySelector('.game-container');
const result = document.getElementById("result")
const message = document.getElementById("message")
const playAgain = document.getElementById("button")



game.addEventListener('click', function (event) {
    let id = (parseInt(event.target.id));
    if (id > 0 && id < 10) {
        let currentBox = document.getElementById("" + id);
        if (track % 2 == 0) {
            xo = 'X';
            curr = 1;
        }
        else {
            xo = 'O';
            curr = -1;
        }
        if (id < 4) {
            matrix[id - 1][0] = curr;
            row = checkingRow(id-1,curr);
            col = checkingCol(0,curr);
        }
        else if (id < 7) {
            matrix[id - 4][1] = curr;
            row = checkingRow(id-4,curr);
            col = checkingCol(1,curr);
        }
        else if (id < 10) {
            matrix[id - 7][2] = curr;
            row = checkingRow(id-7,curr);
            col = checkingCol(2,curr);
        }
        if(row || col){
            result.style.visibility = "visible";
            message.innerHTML = `The winner is ${xo}!`;
            return;
        }
        checkDia();
        if (track == 8) {
            result.style.visibility = "visible";
            message.innerHTML = "Its a Tie"
            return;
        }

        currentBox.innerHTML = `<p>${xo}</p>`;
        track++;
    }
})

function checkingRow(row, item) {
    return matrix[row].every((element,index) => { 
        return element == item; }
    )
}

function checkingCol(col,item){
    return matrix.every((arr,index)=>{
        return arr[col]==item;
    })
}
function checkDia() {
    let lsum = matrix[0][0]+matrix[1][1]+matrix[2][2];
    let rsum = matrix[2][0]+matrix[1][1]+matrix[0][2];
    if (lsum == 3 || rsum == 3) {
        result.style.visibility = "visible";
        message.innerHTML = "The winner is X!"
        return;
    }
    if (lsum == -3 || rsum == -3) {
        result.style.visibility = "visible";
        message.innerHTML = "The winner is O!"
        return;
    }
}

playAgain.onclick = () => {
    location.reload()
}
