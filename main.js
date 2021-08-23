leftWristX="";
leftWristY="";
rightWristX="";
rightWristY="";
music="";
function preload(){
music=loadSound("music.mp3");
}
function setup(){
canvas=createCanvas(600,500)
canvas.position(500,200)
video=createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose",gotPoses);
}
function draw(){
image(video,0,0,600,500)
fill("red");
circle(leftWristX, leftWristY, 20);
circle(rightWristX, rightWristY, 20);
volume=Number(leftWristY);
volume=floor(leftWristY);
volume=(volume/1000)*2;
document.getElementById("volvalue").innerHTML=volume;
music.setVolume(volume);
if (rightWristY>0 && rightWristY<=50) {
music.rate(0.5);
}else if (rightWristY>50 && rightWristY<=100) {
music.rate(1.0);   
}else if (rightWristY>100 && rightWristY<=200) {
    music.rate(2.0);
    }else if (rightWristY>200 && rightWristY<=300) {
        music.rate(3.0);   
        }
        else if (rightWristY>300 && rightWristY<=400) {
            music.rate(4.0);   
            }
            else if (rightWristY>400 && rightWristY<=500) {
                music.rate(5.0);   
                }
            document.getElementById("speedvalue").innerHTML=music.rate();
}
function playmusic(){
music.play();
music.setVolume(1.0);
music.rate(1.0);
}
function stopmusic(){
    music.stop();
    }
function modelLoaded(){
console.log("Mission Control, Great Job! Ready for Lift-Off🚀👨🏽‍🚀🤘🏽")   
};
function gotPoses(result){
if (result.length>0) {
console.log(result);
//0,pose,leftWrist
leftWristX=result[0].pose.leftWrist.x;
leftWristY=result[0].pose.leftWrist.y;
rightWristX=result[0].pose.rightWrist.x;
rightWristY=result[0].pose.rightWrist.y;

console.log(leftWristX,leftWristY,rightWristX,rightWristY,"left wrist x,left wrist y,right wrist x, right wrist Y");
}
}