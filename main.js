var nose_x=0;
var nose_y=0;
function preload(){
nose_image=loadImage('https://i.postimg.cc/XNpmj1w3/filter-nose.png');
}
function draw(){
image(video,0,0,300,300)
fill('#ff0008');
stroke('#ff0008');
//circle(nose_x,nose_y,20);
image(nose_image,nose_x,nose_y,30,30)
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300)
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
   
}
function take_snapshot(){
    save('myfilterimage.png')
}
 function modelLoaded(){
     console.log("poseNet has loaded")
 }
 function gotPoses(results){

if(results.length>0){
    console.log(results);
    nose_x=results[0].pose.nose.x-10;
    nose_y=results[0].pose.nose.y-10;
    console.log("nose x="+nose_x+"nose y="+nose_y);
    
}


 }