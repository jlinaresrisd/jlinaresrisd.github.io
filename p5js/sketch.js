let detailX;


function setup() {
    // put setup code here
  //  createCanvas(windowWidth,windowHeight);
  detailX = 12;
  createCanvas(windowWidth,windowHeight, WEBGL);

  smooth ();
  
  }

  function windowResized() {
  resizeCanvas (windowWidth,windowHeight);
  }
  
  function draw() {
    // put drawing code here
    background (255, 255, 255, 0);
    
    noFill();
    stroke (0,255,0);
    strokeWeight (1);

 
    rotateX(mouseX/100);
    rotateY(mouseY/100);
    torus (mouseX/2, 100, 12, 12);

  }