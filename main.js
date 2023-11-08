// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;
const scoreText = document.querySelector("#scoreText");
const resetScore = document.querySelector("#resetBtn");


// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;

// Get the player paddle element
const playerPaddle = document.querySelector('.player-paddle');
const computerPaddle = document.querySelector('.computer-paddle');
const ball = document.querySelector('.ball');

// The y-velocity of the player paddle
let playerPaddleYPosition = 0;
//Adjust this value for player paddle speed
let playerPaddleSpeed = 80;

// The y-velocity of the computer paddle
let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 2;

// the position and velocity of ball
let ballXPosition = 0;
let ballYPosition = 0;
let ballXVelocity = 2;
let ballYVelocity = 2;

//score 
let playerScore = 0;
let computerScore = 0;
scoreText.textContent = `${playerScore} : ${computerScore}`;


// Update the pong world
function update() {
    // Update the computer paddle's position
    if(ballYPosition + BALL_SIZE / 2 > computerPaddleYPosition + PADDLE_HEIGHT / 2){
        computerPaddleYPosition += computerPaddleYVelocity;
    }else{
        computerPaddleYPosition -= computerPaddleYVelocity;
    }
    //Apply the y-position
    computerPaddle.style.top = `${computerPaddleYPosition}px`;

    //Update player paddle's position 
    playerPaddleYPosition = Math.max(0, Math.min(GAME_AREA_HEIGHT - PADDLE_HEIGHT, playerPaddleYPosition));
    playerPaddle.style.top = `${playerPaddleYPosition}px`;

    // Update the ball's x and y positions
    ballXPosition += ballXVelocity;
    ball.style.left = `${ballXPosition}px`;
    //Apply ball's position
    ballYPosition += ballYVelocity;
    ball.style.top = `${ballYPosition}px`;
    
    // handle paddle collisions
    if(ballXPosition + BALL_SIZE >= GAME_AREA_WIDTH - PADDLE_WIDTH && ballYPosition + BALL_SIZE >= computerPaddleYPosition && ballYPosition <= computerPaddleYPosition + PADDLE_HEIGHT){
        ballXVelocity *= -1;
    }

    if(ballXPosition <= PADDLE_WIDTH && ballYPosition + BALL_SIZE >= playerPaddleYPosition && ballYPosition <= playerPaddleYPosition + PADDLE_HEIGHT){
        ballXVelocity *= -1;
    }

    // handle top and bottom collisions
    
    if(ballYPosition <= 0 || ballYPosition >= GAME_AREA_HEIGHT - BALL_SIZE){
        ballYVelocity *= -1;
    }
          
    // check if ball hits left or right edges
    if(ballXPosition < 0 || ballXPosition > GAME_AREA_WIDTH){
        //reset ball position to center
        ballXPosition = GAME_AREA_WIDTH /2 - BALL_SIZE;
        ballYPosition = GAME_AREA_HEIGHT /2 - BALL_SIZE;
        ball.style.left = `${ballXPosition}px`;
        ball.style.top = `${ballYPosition}px`;
        //reset ball's velocity
        ballXVelocity = 2;
        ballYVelocity = 2;
    }  
    // // update score

    if(ballXPosition < 0){
        computerScore+=1;
    } 
    if(ballXPosition > GAME_AREA_WIDTH){
        playerScore+=1;
    }   
}
//event listener for keyboard controls
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp'){
        playerPaddleYPosition -= playerPaddleSpeed;
   }else if(event.key === 'ArrowDown'){
        playerPaddleYPosition += playerPaddleSpeed
   }
})
//event listener to reset score
// document.addEventListener('click', resetScore)
//     function resetScore(){
//         playerScore = 0;
//         computerScore = 0;
// }


//Call the update() function every 35ms
setInterval(update, 10);
