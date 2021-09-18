never = "";
harryp = "";

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);

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
