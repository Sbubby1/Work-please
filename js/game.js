var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var ball;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new GameObject(20,canvas.height/2, 20, 100, "red");
    player2 = new GameObject(canvas.width - 20, canvas.height/2, 20, 100, "green");
    ball = new GameObject(canvas.width/2, canvas.height/2, 50, 20, "blue");
    ball.vx = -5;
    ball.vy = 0;

	//Set the Animation Timer
	timer = setInterval(animate, interval);
function animate()
{
    //Erase the Screen
    context.clearRect(0,0,canvas.width, canvas.height);
    //draw paddle
    player.drawRect();
    player2.drawRect();

    // Reset vertical velocity each frame; set from input if keys are pressed
    player.vy = 0;
    if(w)
    {
        player.vy = -4;
    }
    if(s)
    {
        player.vy = 4;
    }

    player2.vy = 0;
    if(w2)
    {
        player2.vy = -4;
    }
    if(s2)
    {
        player2.vy = 4;
    }

    player.y += player.vy;
    player2.y += player2.vy;

    //check for collision with top and bottom of canvas
    if(player.y - player.height/2 < 0)
    {
        player.y = player.height/2;
    }
    if(player.y + player.height/2 > canvas.height)
    {
        player.y = canvas.height - player.height/2;
    }
    if(player2.y - player2.height/2 < 0)
    {
        player2.y = player2.height/2;
    }
    if(player2.y + player2.height/2 > canvas.height)
    {
        player2.y = canvas.height - player2.height/2;
    }
    ball.x += ball.vx;
    ball.y += ball.vy;

    if(ball.y - ball.height/2 < 0)
    {
       ball.vy = -ball.vy;
    }
    if(ball.y + ball.height/2 > canvas.height)
    {
        ball.vy = -ball.vy;
    }
    if(ball.x - ball.height/2 < 0)
    {
        ball.x = 500
        ball.y = 400

        
    }
     if(ball.x + ball.height/2 > canvas.width)
    {
        ball.x = 500
        ball.y = 400

        
    }
    if(ball.x + ball.height/2 > canvas.width)
    {
        ball.vx = -ball.vx;
    }
   
    if(ball.hitTestObject(player))
    {
        if(ball.y < player.y - player.height/3){
            ball.vy = -5;
        }
        if(ball.y > player.y + player.height/6){
            ball.vy = 5;
        }

        ball.vx = -ball.vx;
    }
    if(ball.hitTestObject(player2))
    {
        if(ball.y < player2.y - player2.height/3){
            ball.vy = -5;
        }
        if(ball.y > player2.y + player2.height/6){
            ball.vy = 5;
        }

        ball.vx = -ball.vx;
    }
    ball.drawCircle();
}

