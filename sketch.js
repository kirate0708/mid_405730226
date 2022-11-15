//宣告座標和大小的變數陣列、顏色、音樂
var X = []
var Y = []
var size = []
var R = []
var G = []
var B = []
var song
var songIsplay=false
var amp
var vol

function preload(){
  song = loadSound("Nyanyanyanyanyanyanya!.mp3")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES)
  //設定5組的值(i<5)
  for(var i=0;i<5;i++){
    X[i]=random(0,windowWidth)
    Y[i]=random(0,windowHeight)
    size[i]=random(1,10)
    R[i]=random(0,255)
    G[i]=random(0,255)
    B[i]=random(0,255)
  }

}


function draw() {
  background(225)
  textSize(40)
  strokeWeight(5)

  for(var j=0;j<5;j++){

      push()
      translate(X[j],Y[j]) //讓(0,0)變成我設定的座標，在push()~pop()的範圍內\
      strokeWeight(size[j]) //設定線條大小
      stroke("#212529")
      //耳朵
      fill(R[j],G[j],B[j])
          //左耳
          beginShape()
          curveVertex(-10*size[j],-20*size[j]) //右
          curveVertex(-15*size[j],-30*size[j]) //上
          curveVertex(-20*size[j],-20*size[j]) //左
          endShape(CLOSE) 
          // triangle(-100,-100,-50,-100,-75,-150)
          //左內耳
          fill("#212529")
          beginShape()
          curveVertex(-15*size[j],-20*size[j]) //右
          curveVertex(-15*size[j],-29*size[j]) //上
          curveVertex(-20*size[j],-20*size[j]) //左
          endShape(CLOSE) 

          fill(R[j],G[j],B[j])
          //右耳
          beginShape()
          curveVertex(10*size[j],-20*size[j]) //左
          curveVertex(15*size[j],-30*size[j]) //上
          curveVertex(20*size[j],-20*size[j]) //右
          endShape(CLOSE) 
          //右內耳
          fill("#212529")
          beginShape()
          curveVertex(15*size[j],-20*size[j]) //左
          curveVertex(15*size[j],-29*size[j]) //上
          curveVertex(20*size[j],-20*size[j]) //右
          endShape(CLOSE) 

      //臉
      fill(R[j],G[j],B[j])
      rectMode(CENTER)
      rect(0,0,40*size[j])

      //鼻子
      line(0,0,0,10*size[j])
      fill("#212529")
      rect(0,0,4*size[j])
      
      //眼睛
          //眼白
          fill(255)
          rect(-10*size[j],-10*size[j],4*size[j],10*size[j])
          rect(10*size[j],-10*size[j],4*size[j],10*size[j])
          //眼黑
          fill("#212529")
          noStroke()
          rect(-10*size[j]+map(mouseX,0,width,-size[j],size[j]),-10*size[j]+map(mouseY,0,height,-3*size[j],3*size[j]),2*size[j],4*size[j])
          rect(10*size[j]+map(mouseX,0,width,-size[j],size[j]),-10*size[j]+map(mouseY,0,height,-3*size[j],3*size[j]),2*size[j],4*size[j])

          // rect(-55,-65,10,20) 左上邊界
      
      stroke("#212529")

      //嘴巴
      //下嘴唇
      fill("#e56b6f")
      // if(mouseIsPressed){
      //   arc(0,   10*size[j],   10*size[j],   15*size[j],   10,   170,   open)
      // map(vol,0,15,0,15)*
      // }
      // else{
        
      // }
      if(!songIsplay){
      
      }
      else
      {
        vol = amp.getLevel()
        console.log(vol)
        arc(0,10*size[j],10*size[j],map(vol,0,1,8,20)*size[j],10,170,open)
      }

      //上嘴唇
      fill(R[j],G[j],B[j])
      arc(-5*size[j],10*size[j],10*size[j],10*size[j],0,180,open)
      arc(5*size[j],10*size[j],10*size[j],10*size[j],0,180,open)

      pop()
  }
}


function mousePressed(){
  if(!songIsplay){
    song.play()
    songIsplay = true
    amp=new p5.Amplitude()
  }
  else{
    song.pause()
    songIsplay = false
  }
}