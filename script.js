console.log('hiii')
const quizData = [
    {

        question: "Which one of the following is a loop construct that will always be executed once?",

        option: [
            "for",
            "while",
            "switch",
            "do while"
        ],
        correct: 3,
    },
    {

        question: " HTML stands for -",
        option: [
            "HighText Machine Language",
            "HyperText and links Markup Language",

            "HyperText Markup Language",
            "None of these"
        ],
        correct: 2,
    },

    {

        question: "The correct sequence of HTML tags for starting a webpage is -",
        option: [
            "Head, Title, HTML, body",
            "HTML, Body, Title, Head",
            "HTML, Head, Title, Body",
            "HTML, Head, Title, Body"
        ],
        correct: 3
    },

    {

        question: " Which of the following element is responsible for making the text bold in HTML?",
        option: [
            "<pre>",
            "<a>",
            "<b>",
            "<br>"
        ],
        correct: 2  
    },

]
const quiz = document.querySelector('#quiz');
// const scores = document.querySelector('.score');
const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] = document.querySelectorAll('.quiz-question,.option_1,option_2,option_3,option_4');
const submitbBtn = document.querySelector('#submit');
let currntlQuiz = 0;
let score = 0;
const loadQuiz = () => {
    const { question, option } = quizData[currntlQuiz]
    console.log(question)
    questionElm.innerText = question;
    option.forEach(
        (curOption, index) =>
        (window[`option_${index+1}`].innerText = curOption)
        );
    // questionElm.innerText =`${currntlQuiz+1}:${question}`;
    // score.innerText =`score:${currntlQuiz}  `
}


loadQuiz();
const getSelectOption=()=>{
let ans_index;
answerElm.forEach((curOption,index)=>{
    if(curOption.checked){
        ans_index=index;

    }

})
return ans_index;
}
const deselectans=()=>{
    return answerElm.forEach((curelm)=>(curelm.checked=false));
}

submitbBtn.addEventListener("click",()=>{
    const selectedOption=getSelectOption();
    console.log(selectedOption)
    if(selectedOption===quizData[currntlQuiz].correct)
    {
        score=score+1;

    }
    currntlQuiz++;
    if(currntlQuiz<quizData.length)
    
    {
        deselectans();
        loadQuiz();
    }
    else{
        quiz.innerHTML=`
        <div class="result">
        <h2> Your Score:${score}/${quizData.length} correct Answer</h2>
        <p>Congratulation on completing quiz </p>
        <button class="reload-button" onclick="location.reload()">pay Again<button>
        </div>`;
    }
    
})