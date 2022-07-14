

const daysEle = document.querySelector('.days')
const hoursEle = document.querySelector('.hours')
const minutesEle = document.querySelector('.minutes')
const secondsEle = document.querySelector('.seconds')


function countdown(){
    let now = new Date();
    let newYear = new Date('2022/12/25')
    let totalSeconds = Math.floor(((newYear - now) / 1000))

    let seconds = totalSeconds % 60
    let minutes = Math.floor((totalSeconds / 60) % 60)
    let hours = Math.floor((totalSeconds/3600) % 24)
    let days = Math.floor(totalSeconds/3600/24)

    daysEle.innerText = `${days}`
    hoursEle.innerText = `${hours}`
    minutesEle.innerText = `${minutes}`
    secondsEle.innerText = `${seconds}`

}
countdown()
 setInterval(countdown,1000)


