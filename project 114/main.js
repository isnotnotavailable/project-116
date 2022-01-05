leftEar_x = 0
leftEar_y = 0
function preload() {
    Elf_ear = loadImage("https://i.postimg.cc/mgDYxhvj/16414224833578187.png")
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO)
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw() {
    image(video ,0 ,0 , 300, 300);
    image(Elf_ear, leftEar_x, leftEar_y, 20, 20);
}

function take_snapshot(){
    save('myFilterImage.png')
}

function gotPoses(results)
{
    if(results.length > 0)
    {        
        leftEar_x =  results[0].pose.leftEar.x
        leftEary =  results[0].pose.leftEar.y
        console.log(results);
        console.log("leftEar x = " + results[0].pose.leftEar.x);
        console.log("leftEar y = " + results[0].pose.leftEar.y);
    }
}