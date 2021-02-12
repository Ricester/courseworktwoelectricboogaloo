let score = 0;
let questionnumber = 0;
let beginning;
let one;
let two;
let three;
let four;
let five;
let six;
let seven;
let eight;
let nine;
let ten;

function preload(){
  beginning = loadImage("assets/ocean.jpg")
  one = loadImage("assets/one.jpg")
  two = loadImage("assets/two.jfif")
  three = loadImage("assets/three.jfif")
  four = loadImage("assets/four.jpg")
  five = loadImage("assets/five.jpg")
  six = loadImage("assets/six.jfif")
  seven = loadImage("assets/seven.jpg")
  eight = loadImage("assets/eight.jpg")
  nine = loadImage("assets/nine.jfif")
  ten = loadImage("assets/cloud.jpeg")
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
                 
  if (questionnumber == 0) {
    
    image(beginning, 0, 0, width, height)
    textSize(20)
    fill(255)
    text("Welcome to Aquivia!", 90, height/2)
  }
                 
                 
  else if (questionnumber == 1) {
    image(one, 0, 0, width, height)
    textSize(17)
    fill(255)
    text("Which ocean is the largest ocean in the world?", 20, 140)
    text("A - The Pacific Ocean ", 20, 160)
    text("B - The Indian Ocean", 20, 180)
    text("C - The Atlantic Ocean", 20, 200)
    

    }
else if (questionnumber == 2) {
      image(two, 0, 0, width, height)
      textSize(15)
      fill(255)
      text("How much of the Earth is covered by ocean?", 20, 140)
      text("A - 20%", 20, 160)
      text("B - 40%", 20, 180)
      text("C - 70%", 20, 200)

    
    }
                 
else if (questionnumber == 3) {
      image(three, 0, 0, width, height)
      textSize(15)
      fill(255)
      text("How much water is there in the human body on average?", 20, 140)
      text("A - 20%", 20, 160)
      text("B - 40%", 20, 180)
      text("C - 75%", 20, 200)

      
    }
else if (questionnumber == 4) {
      image(four, 0, 0, width, height)
      textSize(15)
      fill(255)
      text("Where is the Bermuda Triangle located?", 20, 140)
      text("A - The Pacific ocean", 20, 160)
      text("B - The Atlantic ocean", 20, 180)
      text("C - The Indian ocean", 20, 200)

    }
else if (questionnumber == 5) {
      image(five, 0, 0, width, height)
      textSize(15)
      fill(255)
      text("How many individual oceans are there?", 20, 140)
      text("A - Three", 20, 160)
      text("B - Five", 20, 180)
      text("C - Seven", 20, 200)

    }
else if (questionnumber == 6) {
      image(six, 0, 0, width, height)
      textSize(15)
      fill(255)
      text("How many miles deep is the Mariana Trench?", 20, 140)
      text("A - Around three miles", 20, 160)
      text("B - Around five miles", 20, 180)
      text("C - Around seven miles", 20, 200)

    }
else if (questionnumber == 7) {
      image(seven, 0, 0, width, height)
      textSize(15)
      fill(255)
      text("How many islands are there in the Pacific Ocean?", 20, 140)
      text("A - Around 10,000", 20, 160)
      text("B - Around 25,000", 20, 180)
      text("C - Around 15,000", 20, 200)

    }
else if (questionnumber == 8) {
      image(eight, 0, 0, width, height)
      textSize(15)
      fill(255)
      text("What percentage of life on Earth is found in the oceans?", 20, 140)
      text("A - 5-15%", 20, 160)
      text("B - 25-50%", 20, 180)
      text("C - 50-80%", 20, 200)

    } 
else if (questionnumber == 9) {
      image(nine, 0, 0, width, height)
      textSize(15)
      fill(255)
      text("How much of the ocean is left unexplored?", 20, 140)
      text("A - 80%", 20, 160)
      text("B - 30%", 20, 180)
      text("C - 50%", 20, 200)

    }
else if (questionnumber == 10) {
      image(ten, 0, 0, width, height)
      textSize(15)
      fill(255)
      text("What % of our oxygen is produced by the ocean?", 20, 140)
      text("A - 20%", 20, 160)
      text("B - 50%", 20, 180)
      text("C - 70%", 20, 200)

    }
//the points are showing as 2 for each correct answer and 0 for none?
  else if (questionnumber == 11) {
  image(beginning, 0, 0, width, height)
  textSize(20)
  fill(255)
  text("Your score is", 150, 180)
  text(score, width/2, height/2)
  }
}
//to progress past the opening slide via using the mouse
  function mousePressed() {
    if(questionnumber == 0)
      questionnumber += 1;
}
//adds ability to answer questions using the keyboard
function keyPressed()
{
  //shows keystrokes in the console
  console.log(key);
  if(questionnumber == 1)
    if (key == 'a') { 
          questionnumber += 1;
          score += 1;
        }
        else {
          questionnumber += 1;
        }
  else if(questionnumber == 2)
    if (key == 'c') { 
          questionnumber += 1;
          score += 1;
        }
        else {
          questionnumber += 1;
        }
    else if(questionnumber == 3)
    if (key == 'c') { 
          questionnumber += 1;
          score += 1;
        }
        else {
          questionnumber += 1;
        }
    else if(questionnumber == 4)
    if (key == 'b') { 
          questionnumber += 1;
          score += 1;
        }
        else {
          questionnumber += 1;
        }
    else if(questionnumber == 5)
    if (key == 'c') { 
          questionnumber += 1;
          score += 1;
        }
        else {
          questionnumber += 1;
        }
    else if(questionnumber == 6)
    if (key == 'c') { 
          questionnumber += 1;
          score += 1;
        }
        else {
          questionnumber += 1;
        }
    else if(questionnumber == 7)
    if (key == 'b') { 
          questionnumber += 1;
          score += 1;
        }
        else {
          questionnumber += 1;
        }
    else if(questionnumber == 8)
    if (key == 'c') { 
          questionnumber += 1;
          score += 1;
        }
        else {
          questionnumber += 1;
        }
    else if(questionnumber == 9)
    if (key == 'a') { 
          questionnumber += 1;
          score += 1;
        }
        else {
          questionnumber += 1;
        }
    else if(questionnumber == 10)
    if (key == 'c') { 
          questionnumber += 1;
          score += 1;
        }
        else {
          questionnumber += 1;
        }
    
  
}
