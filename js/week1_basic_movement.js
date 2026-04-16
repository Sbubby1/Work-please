//Declare my variables

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
	
	player.vx = 10;
	player.vy = 10;
	
	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	if(player.x + player.width/2 > canvas.width){
		//player.x = -player.width/2;
		player.vx = -player.vx;	
		player.color = "blue"
	}
	if(player.x - player.width/2 < 0){
		//player.x = -player.width/2;
		player.vx = -player.vx;	
		player.color = "green"
	}
	if(player.y + player.height/2 > canvas.height){
		//player.x = -player.width/2;
		player.vy = -player.vy;	
		player.color = "red"
	}
	if(player.y - player.height/2 < 0){
		//player.x = -player.width/2;
		player.vy = -player.vy;	
		player.color = "black"
	}


	//Move the Player
	player.x += player.vx;
	player.y += player.vy
	//Update the Screen
	// player.draw();
	player.drawcircle();
}

	
