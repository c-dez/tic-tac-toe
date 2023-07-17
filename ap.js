const arrayGrid = []


let grids = document.querySelectorAll('.grid')


let click = function (e){
    e.target.textContent = 'x'
    console.log(e.target)
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
