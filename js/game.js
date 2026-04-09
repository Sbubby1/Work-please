var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new GameObject(20,canvas.height/2, 20, 100, "red");

	//Set the Animation Timer
	timer = setInterval(animate, interval);
function animate()
{
    //Erase the Screen
    context.clearRect(0,0,canvas.width, canvas.height);
    //draw paddle
    player.drawRect();

    // Reset vertical velocity each frame; set from input if keys are pressed
    player.vy = 0;
    if(w)
    {
        player.vy = -2;
    }
    if(s)
    {
        player.vy = 2;
    }

    player.y += player.vy;

    //check for collision with top and bottom of canvas
    if(player.y < 0)
    {
        player.y = 0;
    }
    if(player.y + player.height > canvas.height)
    {
        player.y = canvas.height - player.height;
    }
}

