function setup() {
    video = createCapture(VIDEO);
    video.size(550, 600);
    video.position(150, 100)

    canvas = createCanvas(550, 550);
    canvas.position(1000, 130);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#1F51FF');
}

function modelLoaded() {
    console.log('PoseNet Is Intialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}