never = "";
harryp = "";

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    Image(600, 500, 0, 0);

}

function preload() {
    never = loadSound("music.mp3");
    harryp = loadSound("music.mp3");
    
}

function play()
{
    song.play();
}

function stop()
{
    song.stop();
}
