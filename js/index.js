let s, food;
let scl = 20;
let score = 0, testScore = 0;

function setup() {
  createCanvas(windowWidth, windowHeight*.7);
  s = new Snake();
  frameRate(10);
  pickLocation();
}

function pickLocation() {
  let cols = floor(width/scl);
  let rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {
  background(51);
  if(s.eat(food)){
    testScore = score + 10;
    if (score !== testScore) {
      score = testScore;
      $("#score").text(score);
    }
    console.log(score);
    pickLocation();
  }
  s.death();
  s.update();
  s.show();

  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    up();
  } else if (keyCode === DOWN_ARROW) {
    down();
  } else if (keyCode === RIGHT_ARROW) {
    right();
  } else if (keyCode === LEFT_ARROW) {
    left();
  }
}

function up() {
  if (s.yspeed !== 1) {
    s.dir(0, -1);
  }
}

function down() {
  if (s.yspeed !== -1) {
    s.dir(0, 1);
  }
}

function left() {
  if (s.xspeed !== 1) {
    s.dir(-1, 0);
  }
}

function right() {
  if (s.xspeed !== -1) {
    s.dir(1, 0);
  }
}
