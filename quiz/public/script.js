

//quesitons from https://americanhistory.si.edu/citizenship/test
const questions = [
    {
    question:'What are two ways that Americans can participate in their democracy?',
    A: 'Purchase a building and go on a trip',
    B: 'Drive a car and go to a museum',
    C: 'Vote and give an elected official your opinion on an issue',
    D: 'Eat at a restaurant and apply for a job',
    userAnswer: null,
    correct: 'C'
},{
    question:'We elect a U.S. Senator for how many years?',
    A: '10',
    B: '6',
    C: '2',
    D: '4',
    userAnswer: null,
    correct: 'B'

},{
    question:'There were 13 original states. Name three.',
    A: 'Florida, Mississippi, Louisiana',
    B: 'New York, Virginia, Massachusetts',
    C: 'Utah, Nebraska, Kansas',
    D: 'Texas, New Mexico, Arizona',
    userAnswer: null,
    correct: 'B'

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
    questions[i].userAnswer = myForm.answer.value //52 and 53 make sure user selected an answer
    if(questions[i].userAnswer){
        questions[i].userAnswer == questions[i].correct ? total += 1 : null

        i++

        if(i < questions.length){
            nextQuestion()
        }
        else  {
            const container = document.querySelector('.container')
            container.innerHTML = 
            `<h3> You got ${total}/${questions.length} right</h3>
            <button OnClick = 'location.reload()'>Refresh</button>`
        }
    }
    else alert('Select an answer')
})

nextQuestion()
