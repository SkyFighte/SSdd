function preload(){
   
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}
function draw(){

}
function take_snapshot(){
    save('MyPicture.jpg');
    
}