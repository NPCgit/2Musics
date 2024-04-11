Tutorial = ""
Music2 = ""

function preload()
{
    Tutorial = loadSound("YT tutorial music.mp3")
    Music2 = loadSound("Musik2.mp3")
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 500)
}

function play()
{
   // song.play();
}