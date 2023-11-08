# Pong!

> In this assignment, we'll be buliding part of the classic video game, Pong!

<img src="https://media1.tenor.com/images/40fac3c55a73e15ef82705ab5d51245d/tenor.gif?itemid=16894549"/>

## Task #1: Making the Ball Bounce

Open `index.html` and notice how the right paddle is moving automatically.

Your task is to bring the game one step closer to completion by making the green
ball bounce around the screen.

To do this, read through the code that makes the paddle on the right (referred to as the 'computer paddle')
move. Use this code as a reference for the code that you'll write to move the ball.

**Hints:**

* Above the `update()` funciton, create variables to store the ball's x-position, y-position, x-velocity, and y-velocity
* Each time `update()` is called
    * increment the ball's x-position by the x-velocity
    * increment the ball's y-position by the y-velocity
    * update the ball's style so that its left edge is located at the x-position variable (in pixels)
    * update the ball's style so that its top edge is located at the y-position variable (in pixels)
    * add a conditional to detect if the ball is touching the left or right edge of the window 
        * if it is, multiply the ball's x-velocity by -1
    * add a conditional to detect if the ball is touching the top or bottom edge of the window
        * if it is, multiply the ball's y-velocity by -1

## Task #2: Implementing a Stretch Goal

Your next task is to implement at least one stretch goal of your choice! 

### Stretch Goals

* Make the ball bounce off the paddles
* Make the ball NOT bounce off the left and right walls, instead when the ball hits the left or right wall,
reset its position to somewhere in the middle
* Make the computer paddle (the right paddle) track the ball's position and always deflect the ball
* Make the left paddle's position controllable through keyboard presses. But how do you know when the user presses a key? You can read about that [here](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)!

If you finish one stretch goal, keep going! Work towards creating a fully functional pong game!
