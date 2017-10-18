function setup() {
  createCanvas(500,500)
  angleMode(DEGREES)
  frameRate(10)
}
function draw() {
  
  background(30,30,30,100)
  strokeWeight(2)

  var r1 = mouseX;
  if(r1 >= 250)
{
  var r = 100;
} else {
  var r = 50;

}
  
  var soglia = 210;
  
  for(var x = r; x < width; x += r) {
  for(var y = r; y < height; y += r) {

  fill(255)
  noStroke();
  ellipse(x,y,r/8,r/8)
  noFill()

  //________________//

  
  var T1 = random()*255;
  if(T1 >= soglia)
{
  strokeWeight(3)
  stroke(100,100,100,255);
  arc(x, y, r, r, 0, 90 );
  } else {
  strokeWeight(2)  
  stroke(255,255,255,90);
  arc(x, y, r, r, 0, 90 );
}

  //________________//

 var T2 = random()*255;
  if(T2 >= soglia)
{
 strokeWeight(3)
 stroke(255,255,255,255);
  arc(x, y, r, r, 90, 180 );
  } else {
  strokeWeight(2)  
  stroke(255,255,255,0);
  arc(x, y, r, r, 90, 180 );
}
  
  //________________//

 var T3 = random()*255;
  if(T3 >= soglia)
{
 strokeWeight(3)
 stroke(255,255,255,255);
  arc(x, y, r, r, 180, 270 );
  } else {
    strokeWeight(2)
stroke(255,255,255,90);
  arc(x, y, r, r, 180, 270 );
}
  
  //________________//

 var T4 = random()*255;
  if(T4 >= soglia)
{
  strokeWeight(3)
 stroke(255,255,255,255);
  arc(x, y, r, r, 270, 360 );
  } else { 
    strokeWeight(2)
stroke(255,255,255,0);
  arc(x, y, r, r, 270, 360 );
}
}
  }
  }
  

  
  
  
  
