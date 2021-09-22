never = "";
harryp = "";
rightWristY=0;
rightWristX=0;
leftWristY=0;
leftWristX=0;
scoreRightWrist = 0;
scoreLeftWrist = 0;




function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

  music_status = never.isPlaying();

function draw() {
	image(video, 0, 0, 600, 500);

	fill("#FF0000");
	stroke("#FF0000");

	if(scoreLeftWrist > 0.2)
	{
		circle(leftWristX,leftWristY,20);
		never.play();
	}
}


function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function preload() {
    harryp = loadSound("music.mp3");
    never = loadSound("Never Gonna Give You Up Original.mp3");
    
}

function play()
{
	never.play();
	never.setVolume(1);
	never.rate(1);
    
}

function stop()
{
    never.stop();
    harryp.stop();
}

function gotPoses(results)
{
  if(results.length > 0)
  {
	scoreRightWrist =  results[0].pose.keypoints[9].score;
	scoreLeftWrist =  results[0].pose.keypoints[10].score;
	console.log("scoreRightWrist = " + scoreRightWrist + " scoreLeftWrist = " + scoreLeftWrist);
	rightWristX = results[0].pose.rightWrist.x;
	rightWristY = results[0].pose.rightWrist.y;
    leftWristX = results[0].pose.leftWrist.x;
	leftWristY = results[0].pose.leftWrist.y;
	console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
	console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
		
  }
}
