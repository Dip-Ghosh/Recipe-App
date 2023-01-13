


//fetch meal list
import {meals} from "./main";

const fetchAllMeals = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast');
    let mealList = await response.json();
    loadMeals(mealList.meals);
}


//load data when the page open
const loadMeals = (mealList) => {
    mealList.forEach((mealItem) => {

        const mealElement = document.createElement("div");

        mealElement.classList.add("row");
        mealElement.innerHTML = `
                    <div class="col d-flex align-items-stretch">
                        <div class="card mb-4 rounded-3 shadow-sm ">
                            <div class="card-header py-3">
                                <img src="${mealItem.strMealThumb}" class="card-img-top" alt="${mealItem.strMealThumb}">
                            </div>
                        </div>
                    </div> `;

        meals.appendChild(mealElement);
    })
}

document.addEventListener("DOMContentLoaded", fetchAllMeals );












const filterMeals = (meals) => {

    categoryMeals.innerHTML = '';
    meals.forEach((meal) => {

        const mealElement = document.createElement("div");

        mealElement.classList.add("row");
        mealElement.innerHTML = `
                    <div class="col d-flex align-items-stretch">
                        <div class="card mb-4 rounded-3 shadow-sm ">
                            <div class="card-header py-3">
                                <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strCategoryThumb}">
                            </div>
                            <div class="card-body">
                                <h1 class="card-title pricing-card-title">${meal.strCategory}</h1>
                                <button type="button" onclick="details(${meal.idCategory})" class="w-100 btn btn-lg btn-primary" id="${meal.idCategory}">See More</button>
                            </div>
                        </div>
                    </div> `;

        categoryMeals.appendChild(mealElement);
    })
}

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let searchKey = searchMeals.value.trim();

    if (checkIsNumber(searchKey)) {
        searchById(searchKey);
    } else if (searchKey.length == 1) {
        searchBySingleAlphabet(searchKey);
    } else {
        searchByName(searchKey)
    }
})

export { loadMeals };



