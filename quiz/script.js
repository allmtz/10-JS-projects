


const questions = [
    {
    question:'this is quesiton 1',
    A: 'answr a',
    B: 'answr b',
    C: 'answr c',
    D: 'answr d',
    userAnswer: null,
    correct: 'A'
},{
    question:'this is quesiton 2',
    A: 'answr a2',
    B: 'answr b2',
    C: 'answr c2',
    D: 'answr d2',
    userAnswer: null,
    correct: 'A'

},{
    question:'this is quesiton 3',
    A: 'answr a3',
    B: 'answr b3',
    C: 'answr c3',
    D: 'answr d3',
    userAnswer: null,
    correct: 'A'

}
]

const submitBtn = document.getElementById('submit')
const myForm = document.getElementById('form')
let i = 0
let total = 0

myForm.addEventListener('submit',(e)=>{
    e.preventDefault()
})

function nextQuestion(){
    document.querySelector('.question-display').innerText = questions[i].question
    document.querySelector('.choice1').innerText = questions[i].A
    document.querySelector('.choice2').innerText = questions[i].B
    document.querySelector('.choice3').innerText = questions[i].C
    document.querySelector('.choice4').innerText = questions[i].D

}

submitBtn.addEventListener('click',()=>{
    questions[i].userAnswer = myForm.answer.value
    questions[i].userAnswer == questions[i].correct ? total += 1 : null

    i++

    if(i < questions.length){
        nextQuestion()
    }
    else  {
        const container = document.querySelector('.container')
        container.innerHTML = `<h1> you got ${total}/${questions.length}
         right</h1><button OnClick = 'location.reload()'>Refresh<button>`
    }
})

nextQuestion()
