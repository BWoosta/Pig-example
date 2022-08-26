function setup() {
  createCanvas(400, 400);
  background("green");
}

function draw() {
  strokeWeight(3);
  stroke('black');
  fill(247, 215, 215);
  ellipse(200, 200, 200);
//head
  fill(242, 201, 201);
  ellipse(200, 215, 60, 40);
//nose
  fill('black');
  ellipse(190, 215, 10);
  ellipse(210, 215, 10);
//nostrils
  fill('white');
  ellipse(170, 170, 40);
    ellipse(230, 170, 40);
//whites of eye
 fill('black');
  ellipse(170, 177, 25);
  ellipse(230, 177, 25);
//pupils
  fill(247, 186, 186);
  ellipse(200, 260, 70, 25);
//mouth
  fill(247, 215, 215);
  ellipse(125, 100, 45, 80)
   ellipse(275, 100, 45, 80)
//outer ears
   fill(222, 166, 166);
  ellipse(125, 110, 25, 50)
   ellipse(275, 110, 25, 50)
//ear centers
textSize(90);
  strokeWeight(5);
  text("Oink!", 90, 370)
}