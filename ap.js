const arrayGrid = []


let grids = document.querySelectorAll('.grid')

let marker = 'O'
let click = function (e){
    turn();
    e.target.textContent = marker
    console.log(player1.turn)
    e.target.removeEventListener('click', click)
    
}
grids.forEach((grid)=>{
    grid.addEventListener('click',click)
    
})


let one = document.querySelector('.one')

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