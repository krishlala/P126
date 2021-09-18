never = "";
harryp = "";

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
    harryp.play();
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.y;
        console.log("leftWrist = " + leftWristY + "rightWristX" + rightWristY);

    }
}
