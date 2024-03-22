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
            ends = getResult(id-1,0,curr);
        }
        else if (id < 7) {
            matrix[id - 4][1] = curr;
            ends = getResult(id-4,1,curr);
        }
        else if (id < 10) {
            matrix[id - 7][2] = curr;
            ends = getResult(id-7,2,curr);
        }
        if(ends){
            result.style.visibility = "visible";
            message.innerHTML = `The winner is ${xo}!`;
            return;
        }

        if (track == 8) {
            result.style.visibility = "visible";
            message.innerHTML = "Its a Tie"
            return;
        }

        currentBox.innerHTML = `<p>${xo}</p>`;
        track++;
    }
})

function getResult(row,col,item){
    let rowE =  matrix[row].every((element) => { 
        return element == item; }
    )
    let colE = matrix.every((arr)=>{
        return arr[col]==item;
    })
    let diaE = true;
    for(let i = 0; i < 3; i++){
        if(matrix[i][i] != item){
            diaE = false;
            break;
        }
    }
    if(diaE)
        return true;
    diaE = true;
    for(let i = 0; i < 3; i++){
        if(matrix[2-i][i] != item){
            diaE = false;
            break;
        }
    }
    console.log(""+rowE+colE+diaE)
    return rowE || colE || diaE;
}

playAgain.onclick = () => {
    location.reload()
}
