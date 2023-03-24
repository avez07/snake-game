let inputdir = {x: 0 , y: 0}
const foodsound = new Audio("/images/music/food.mp3");
const gameover = new Audio("/images/music/gameover.mp3");
const movesound = new Audio("/images/music/move.mp3");
const music = new Audio("/images/music/music.mp3");
let speed = 2;
let lastpainttime = 0
let snakeArr = [
    {x: 13 , y:15}
];
let food = {x: 6 , y: 7};
let score = 0;



function main(ctime) {
window.requestAnimationFrame(main);
if((ctime - lastpainttime)/1000 < 1/speed){
    return;
}else{
    lastpainttime = ctime
    game();
}

    console.log(ctime);
}

function isCollide(sarr) {
    return false;
}
function game(){
let board = document.getElementById('board')

    // updating arrys
   if(isCollide(snakeArr)){
    gameOverSound.play();
    musicSound.pause();
    inputdir =  {x: 0, y: 0}; 
    alert("Game Over. Press any key to play again!");
    snakeArr = [{x: 13, y: 15}];
    musicSound.play();
    score = 0; 
}
        
    
    // updating the food 
    if(snakeArr[0].y === food.y && snakeArr[0].x === food.x){
    foodsound.play();
    if(snakeArr.length > 1){
        snakeArr.unshift({X: snakeArr[0].x + inputdir.x , y: snakeArr[0].y + inputdir.y});
    }
    let a = 2;
    let b = 16;
    food ={x : Math.round(a+(b-a)*Math.random()), y: Math.round(a+(b-a)*Math.random())}; 
    board.removeChild(foodElement);
    board.classList.add('snake');
}
   // moving snake 
for(let i = snakeArr.length - 2; i >= 0; i--) {
    snakeArr[i+1] = snakeArr[i];
}
snakeArr[0].x += inputdir.x;
snakeArr[0].y += inputdir.y;

// display the snake
// display the snake
board.innerHTML = "";

snakeArr.forEach((e, index) => {
    snakeElent = document.createElement('div');
    snakeElent.style.gridRowStart = e.y;
    snakeElent.style.gridColumnStart = e.x;
    if (index == 0) {
        snakeElent.classList.add("head");
    } else {
        snakeElent.classList.add("snake");
    }
    board.appendChild(snakeElent);
});


        // displaying the food 
        foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add("food");
        board.appendChild(foodElement);
   
    

}




window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    inputdir = { x: 0 , y:1} //game start
    movesound.play();
    switch (e.key) {
        case "ArrowUp":
            inputdir.x = 0;
            inputdir.y = -1;
           
            
            break;
            case "ArrowDown":
                inputdir.x = 0;
                inputdir.y = 1;
                
                break;
                case "ArrowLeft":
                    inputdir.x = -1;
                    inputdir.y = 0;
                    
                    break;
                    case "ArrowRight":
                        inputdir.x = 1;
                        inputdir.y = 0;
                        
                        break;
    
        default:
            break;
    }
})
