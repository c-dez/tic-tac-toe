const arrayGrid = []


let grids = document.querySelectorAll('.grid')

let marker = ''
let click = function (e){
    turn();
    e.target.textContent = marker
    console.log(player1.turn)
    assingValueToArray();
    e.target.removeEventListener('click', click)
    player1Wins()
    player2Wins()
    
}
grids.forEach((grid)=>{
    grid.addEventListener('click',click)
    
})



let Player = function(player, marker, turn, score){
    this.player = player;
    this.marker = marker;
    this.turn = turn;
    this.score = score;
}

const player1 = new Player('player1', 'O',true, 0)
const player2 = new Player('player2', 'X', false, 0)


//turnos
//dependiendo de cada turno el marker cambia con el turno

const turn = ()=>{
    if(player1.turn == true){
        marker = player1.marker;
        player1.turn = false;

    }else if(player1.turn == false){
        marker = player2.marker;
        player1.turn = true;
    }
}

//asignar valor de cada grid a su equivalente en el arrayGrid[]
const assingValueToArray = ()=>{
    let grid1 = document.querySelector('.one')
    let grid2 = document.querySelector('.two')
    let grid3 = document.querySelector('.three')
    let grid4 = document.querySelector('.four')
    let grid5 = document.querySelector('.five')
    let grid6 = document.querySelector('.six')
    let grid7 = document.querySelector('.seven')
    let grid8 = document.querySelector('.eight')
    let grid9 = document.querySelector('.nine')

    arrayGrid[0] = grid1.textContent
    arrayGrid[1] = grid2.textContent
    arrayGrid[2] = grid3.textContent
    arrayGrid[3] = grid4.textContent
    arrayGrid[4] = grid5.textContent
    arrayGrid[5] = grid6.textContent
    arrayGrid[6] = grid7.textContent
    arrayGrid[7] = grid8.textContent
    arrayGrid[8] = grid9.textContent
}

//condicion de ganar

const player1Wins = ()=>{
    if(arrayGrid[0] == 'O'&& arrayGrid[1] == 'O' && arrayGrid[2] == 'O'){
        console.log('player 1 wins')
    }else if (arrayGrid[3] == 'O'&& arrayGrid[4] == 'O' && arrayGrid[5] == 'O'){
        console.log('player 1 wins')

    }else if (arrayGrid[6] == 'O'&& arrayGrid[7] == 'O' && arrayGrid[8] == 'O'){
        console.log('player 1 wins')

    }else if (arrayGrid[0] == 'O'&& arrayGrid[3] == 'O' && arrayGrid[6] == 'O'){
        console.log('player 1 wins')

    }else if (arrayGrid[1] == 'O'&& arrayGrid[4] == 'O' && arrayGrid[7] == 'O'){
        console.log('player 1 wins')

    }else if (arrayGrid[2] == 'O'&& arrayGrid[5] == 'O' && arrayGrid[8] == 'O'){
        console.log('player 1 wins')

    }else if (arrayGrid[6] == 'O'&& arrayGrid[4] == 'O' && arrayGrid[2] == 'O'){
        console.log('player 1 wins')

    }//falta 0 4 8
}

const player2Wins = ()=>{
    if(arrayGrid[0] == 'X'&& arrayGrid[1] == 'X' && arrayGrid[2] == 'X'){
        console.log('player 2 wins')
    }else if (arrayGrid[3] == 'X'&& arrayGrid[4] == 'X' && arrayGrid[5] == 'X'){
        console.log('player 2 wins')

    }else if (arrayGrid[6] == 'X'&& arrayGrid[7] == 'X' && arrayGrid[8] == 'X'){
        console.log('player 2 wins')

    }else if (arrayGrid[0] == 'X'&& arrayGrid[3] == 'X' && arrayGrid[6] == 'X'){
        console.log('player 2 wins')

    }else if (arrayGrid[1] == 'X'&& arrayGrid[4] == 'X' && arrayGrid[7] == 'X'){
        console.log('player 2 wins')

    }else if (arrayGrid[2] == 'X'&& arrayGrid[5] == 'X' && arrayGrid[8] == 'X'){
        console.log('player 2 wins')

    }else if (arrayGrid[6] == 'X'&& arrayGrid[4] == 'X' && arrayGrid[2] == 'X'){
        console.log('player 2 wins')

    }//falta 0 4 8
}

