var questionBox= [
    {
        question : '1. Who invented JavaScript?',
        choice : ['Sheryl Sandberg','Brendan Eich','Douglas Crockforde','Albert Byrone'],
        answer : 'Albert Byrone'
    },
    {
        question : '2. Which one of these is a JavaScript package manager?',
        choice : ['Node.js','TypeScript','Html','npm'],
        answer : 'npm'
    },
    {
        question : '3. Which tool can you use to ensure code quality?',
        choice : ['Angular','jQuery','RequireJS','ESLint'],
        answer : 'Angular'
    },
    {
        question : '4. Which tool can you use to ensure code quality?',
        choice : ['Angular','jQuery','RequireJS','ESLint'],
        answer : 'ESLint'
    },

]



var question= document.getElementById('question');
var a_text= document.getElementById('a_text');
var b_text= document.getElementById('b_text');
var c_text= document.getElementById('c_text');
var d_text= document.getElementById('d_text');
var span= document.querySelectorAll('span');
var i=0;

var startBtn = document.getElementById("startBtn")


function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML=questionBox[i].question;
    a_text.innerHTML= questionBox[i].choice[0];
    b_text.innerHTML= questionBox[i].choice[1];
    c_text.innerHTML= questionBox[i].choice[2];
    d_text.innerHTML= questionBox[i].choice[3];
    
}

displayQuestion();


startBtn.addEventListener('click', startQuiz)

function startQuiz() {
    console.log("Started Quiz")
    startBtn.classList.add("hide")
    questionContainer.classList.remove("hide")


}

