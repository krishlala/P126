var never = "";
var harryp = "";
var rightWristY=0;
var rightWristX=0;
var leftWristY=0;
var leftWristX=0;
var name = document.getElementById("name").value;

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
  music_status = music.isPlaying();


function draw() {
    image(video, 0, 0, 600, 500);
    if(score_leftwrist > 0.2) {

    
    fill('red');
    stroke('red');
    circle(leftWristX, leftWristY, 20);
    InNumberleftWristY = Number(leftWristY);
    removedecimal = floor(InNumberleftWristY);
    volume = removedecimal/500;
    document.getElementById("volume").innerHTML = "Volume = " + volume;
    never.setVolume(volume);
    }
    
    if(song_status == false) {
        music.play();
        document.getElementById("name").innerHTML = "Song Name = " + "Never Gonna Give You Up.";
    }
}


function modelLoaded() {
    console.log('PoseNet is Initialized!');
}

function preload() {
    harryp = loadSound("music.mp3");
    never = loadSound("Never Gonna Give You Up Original.mp3");
    
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
        leftWristY = results[0].pose.leftWrist.y;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("leftWristY = " + leftWristY + "rightWristY" + rightWristY);

    }
}
