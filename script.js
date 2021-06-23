let lyrics;
let wordList = [];
let stroke_color;
let fill_color;

function preload() {
  //loads our assets
  lyrics = loadStrings('./assets/lyrics.txt');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250);

  ////list of lines -> list of words

  // for(let i = 0; i < lyrics.length; i++) {
  //   let line = lyrics[i];
  //   let wordsInOneLine = line.split(' ');
  //   wordList.push(...wordsInOneLine);
  // }
  // console.log(wordList);

strokeWeight(3);
stroke_color = color('pink');
fill_color = color('white');
textSize(40);

lyrics.forEach(line => {
    wordList.push(...line.split(' '));
});

}

function draw() {
  fill(fill_color);
  stroke(stroke_color);
  let rateNum = 5;
  if (frameCount % rateNum == 0) {
    let word = wordList[frameCount % wordList.length];
    text(word, mouseX, mouseY);
  }
  
}

