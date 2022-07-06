objects=[];
rightWristX=0;
rightWristY=0;
world_start="";
function preload(){
    world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}
function setup(){
    canvas=createCanvas(500,500);
    canvas.parent("canvas");
    video=createCapture(VIDEO);
	video.parent("game_console");
	video.size(830,260);
	posenet=ml5.poseNet(video,modelloaded);
	posenet.on("pose",gotresults);
	instializeInSetup(mario);
   
}
function draw(){
    image(video,0,0,1240,336);
	
	game();
	for(i=0;i<objects.length;i++){
		fill("Red");
		stroke("Blue");
		circle(rightWristX,rightWristY,25);
	}

}
function modelloaded(){
    console.log("Posenet is loaded");

}
function gotresults(results){
    if(results.length > 0){
		console.log(results);
		noseX=results[0].pose.righrWrist.x;
		noseY=results[0].pose.righrWrist.y;
		console.log("rightWristX="+rightWristX);
		console.log("rightWristY="+rightWristY);
	}
	objects=results;

	
	
}