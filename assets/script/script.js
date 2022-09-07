const questions = [
  {id : 0,
   q : "What is the name of Nadja's reincarnated lover?",
   a: [{ text : "Jeff", isCorrect : true},
       { text: "Michael", isCorrect : false},
       { text: "Jesk", isCorrect : false},
       { text: "Ryan", isCorrect : false}]
   },{
    id : 1,
    q : "Which famous murderer does Lazslo claim to be?",
    a : [{ text: "The Zodiac Killer", isCorrect : false},
         {text : "Jeffry Dahmer", isCorrect: false},
        {text: "Jack the Ripper", isCorrect:true},
        {text : "The Golden State Killer", isCorrect: false}]
   },
    {id : 2,
    q: "What family does Guillermo find out he belongs to?",
    a: [{ text: "The Habsburgs", isCorrect: false},
        {text : "The Van Helsings", isCorrect : true},
        {text : "The Kardashians", isCorrect : false},
        {text : "The Jacksons", isCorrect : false}]
    },
    {id: 3,
    q : "What form does Nadja's ghost inhabit?",
    a: [{text: "A Doll", isCorrect : true},
        { text : "A Robot", isCorrect : false},
        {text : "A Horse", isCorrect : false},
        {text : "A Computer", isCorrect : false}]}]

let question = document.getElementById('question');
//question.innerText = questions[0].q;
let op1 = document.getElementById('option-1');
let op2 = document.getElementById('option-2');
let op3 = document.getElementById('option-3');
let op4 = document.getElementById('option-4');

/**
 * Function takes the id and displays relavant questions and options
 * Sets the question and the question number using the id
 */
function displayQuestion(id){
//sets id for question and displays correct question number for the users
let order = document.getElementById('number');

//check id and display the relevant question
question.innerHTML = questions[id].q;
//sets the question buttons
op1.innerText = questions[id].a[0].text;
op2.innerText = questions[id].a[1].text;
op3.innerText = questions[id].a[2].text;
op4.innerText = questions[id].a[3].text;
order.innerHTML = ++id;
};

displayQuestion(0);
