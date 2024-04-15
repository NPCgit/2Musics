Music1 = ""
Music2 = ""


//wrist coords are numbers
leftWristX = 0
leftWristY = 0
rightWristX = 0
rightWristY = 0


function preload()
{
    Music1 = loadSound("MusiK.mp3")
    Music2 = loadSound("Musik2.mp3")
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    //poseNet again
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet initialized!")
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log(leftWristX + " = LeftWristX " + leftWristY + " = LeftWristY");
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log(rightWristX + " = rightWristX " + rightWristY + " = rightWristY");
    }
}

function draw()
{
    image(video, 0, 0, 600, 500); //lua doesnt require semicolons, but JS does
}

function play()
{
   // song.play();

    song.setVolume(1)
    //1 Is normal, like on pretty much everything but percentages
    song.setRate(1)
    //Speedhax lol spaceuk
}
