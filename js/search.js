
import { mealDiv } from "./main.js"

const searchInputElement = document.getElementById('search-input');
const searchBtn          = document.getElementById('search-btn');

//search by single character
const searchBySingleAlphabet = async (key) => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=' + key);
    let meals = await response.json();
    filterMeals(meals.meals);
}

//search by id
const searchById = async (id) => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id);
    const meals    = await response.json();
    filterMeals(meals.meals);
}

//search by name
const searchByName = async (Name) => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + Name);
    const meals = await response.json();
    filterMeals(meals.meals);
}

//is number check
const checkIsNumber = (str) => {
    return /^\d+$/.test(str);
}


const filterMeals = (meals) => {
    mealDiv.innerHTML = '';
    meals.forEach((item) => {
        const mealElement = document.createElement("div");
        mealElement.classList.add("row");
        mealElement.innerHTML = `
                    <div class="col d-flex align-items-stretch">
                        <div class="card mb-4 rounded-3 shadow-sm ">
                            <div class="card-header py-3">
                                <img src="${item.strMealThumb}" class="card-img-top" alt="${item.strCategoryThumb}">
                            </div>
                            <div class="card-body">
                                <h1 class="card-title pricing-card-title">${item.strCategory}</h1>
                                <button type="button" onclick="details(${item.idCategory})" class="w-100 btn btn-lg btn-primary" id="${item.idCategory}">See More</button>
                            </div>
                        </div>
                    </div> `;

        mealDiv.appendChild(mealElement);
    })
}


searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let searchKey = searchInputElement.value.trim();

    if (checkIsNumber(searchKey)) {
        searchById(searchKey);
    } else if (searchKey.length == 1) {
        searchBySingleAlphabet(searchKey);
    } else {
        searchByName(searchKey)
    }
})

export { filterMeals }