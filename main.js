never = "";
harryp = "";
rightWristY=0;
leftWristY=0;
name = document.getElementById("name").value;

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);

}

function modelLoaded() {
    console.log('PoseNet is Initialized!');
}

function preload() {
    never = loadSound("music.mp3");
    harryp = loadSound("Never Gonna Give You Up Original.mp3");
    
}

function play()
{
    never.play();
    harryp.play();
}

function stop()
{
    never.stop();
    harryp.stop();
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        music();
        leftWristY = results[0].pose.leftWrist.y;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("leftWristY = " + leftWristY + "rightWristY" + rightWristY);

    }
}


function music() {
    if(leftWristY > rightWristY) {
    never.play();
    name = "Never Gonna Give You Up";
    } else {
    }


if(leftWristY < rightWristY) {
    harryp.play();
    name = "Harry Potter Theme Song";
    } else {
    }
}
