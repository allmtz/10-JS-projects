

//add recepie description

const form = document.body.querySelector('form')
const searchBar = document.body.querySelector('.search')
const cardContainer = document.body.querySelector('.card-container')

form.addEventListener('submit',(e) =>{
    e.preventDefault()
    findMeal(searchBar.value); //search for the user input meal
    searchBar.value = ''

})

async function findMeal(meal){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
    const data = await response.json()

    console.log(data)

    cardContainer.innerHTML = '' //clears previous search results

    data.meals.forEach(meal => {
        cardContainer.innerHTML += 
        `<div class = 'card'>
            <img src = ${meal.strMealThumb}>
            <p>${meal.strMeal}</p>
        </div>`
    })
}