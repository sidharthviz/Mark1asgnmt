var readlineSync = require('readline-sync');
var score = 0;

function welcome() {
var userName = readlineSync.question("What's your Name ? ");
console.log("Welcome! " + userName + " Do you Know Siddharth ? ");
}

function qus(question, answer) {

  var UserAns = readlineSync.question(question);

  if (UserAns === answer) {
    console.log("You're Right!");
    score = score + 1;

  } else {
    console.log("You're Wrong!");
  }
  console.log("Your Score: ", score);
  console.log("---------");
}

var Highscore = [{
  
  name: "Arjun",
  score: "3",
}, {
  
  name: "Tubhyam",
  score: "2",
},{
  
  name: "Ruchii",
  score: "10",
}, {
  
  name: "Amir",
  score: "6",
}, {
  
  name: "Shushant",
  answer: "7",
  
}];


var questions = [{
  question: "Am i Adventourous ? ",
  answer: "yes"
}, {
  question: "Do i Like Travelling ? ",
  answer: "yes",
}, {
  question: "Do i Like Reading Books ? ",
  answer: "yes" , 
}, {
  question: "Is he a Artic Monkey Fan ?",
  answer: "Yes",
}, {
  question: "Is he introvert ? ",
  answer: "No",
}];

function game(){
for (var i = 0; i < questions.length; i++) {
  var quiz = questions[i];
  qus(quiz.question, quiz.answer);
 }
}


function end(){
console.log("Wao! You Really Know me! Your Score: ", score);
  console.log("Here's The High Score");
  Highscore.map(score =>  console.log(score.name + " : " + score.score ));

}

welcome();
game();
end();