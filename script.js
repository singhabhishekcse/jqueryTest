const quizData = [  
    {  
     question: "Which language runs in a web browser?",  
     a: "Java",  
     b: "C",  
     c: "Python",  
     d: "JavaScript",  
     correct: "ans4",  
    },  
    {  
     question: "What does CSS stand for?",  
     a: "Central Style Sheets",  
     b: "Cascading Style Sheets",  
     c: "Cascading Simple Sheets",  
     d: "Cars SUVs Sailboats",  
     correct: "ans2",  
    },  
    {  
     question: "What does HTML stand for?",  
     a: "Hypertext Markup Language",  
     b: "Hypertext Markdown Language",  
     c: "Hyperloop Machine Language",  
     d: "Helicopters Terminals Motorboats Lamborginis",  
     correct: "ans1",  
    },  
    {  
     question: "What year was JavaScript launched?",  
     a: "1996",  
     b: "1995",  
     c: "1994",  
     d: "none of the above",  
     correct: "ans2",  
    },  
   ];  

let question = document.getElementById("question");
let option1 = document.getElementById("ans1-label");
let option2 = document.getElementById("ans2-labe2");
let option3 = document.getElementById("ans3-labe3");
let option4 = document.getElementById("ans4-labe4");
let answers = document.querySelectorAll(".answer");
let btn = document.getElementById("btn-id");
let questioncount= 0
let score=0;

   let loadequestion = ()=>{
            question.innerHTML = quizData[questioncount].question;
            option1.innerHTML  =  quizData[questioncount].a;
            option2.innerHTML  =  quizData[questioncount].b;
            option3.innerHTML  =  quizData[questioncount].c;
            option4.innerHTML  =  quizData[questioncount].d;
           
   }
   loadequestion()
   let answer;
let  findidvalue =()=>{
   
    answers.forEach(answerElement =>{
        if(answerElement.checked){
           answer = answerElement.id;
        }
    });
    return answer;
}
let  unchekedvalue =()=>{
   
    answers.forEach(answerElement =>{
       answerElement.checked =false;})
       
}
btn.addEventListener("click",()=>{
   let idValue = findidvalue();
//    console.log(idValue);
if(answer){
    if(idValue == quizData[questioncount].correct){
        score++;
    
    }
    
    questioncount++;
    unchekedvalue();
    if(questioncount < quizData.length){
     loadequestion();
    }else{
     console.log(score);
     console.log(quizData.length);
    }
}

});