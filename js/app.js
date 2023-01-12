
import { fetchMealList } from './api';

const mealList = document.getElementById('meals-list');

const categoryElement = document.getElementById('category-meal');
const mealElement = document.getElementById('meals')
const searchMeals = document.getElementById('search-term');
const searchBtn = document.getElementById('search');
const mealBtn = document.getElementById('random-meals');
const mealEle = document.getElementById('meals');


//load data when the page open
const loadMeals = (meals) => {

    meals.forEach((meal) => {

        const mealElement = document.createElement("div");

        mealElement.classList.add("row");
        mealElement.innerHTML = `
                    <div class="col d-flex align-items-stretch">
                        <div class="card mb-4 rounded-3 shadow-sm ">
                            <div class="card-header py-3">
                                <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMealThumb}">
                            </div>
                        </div>
                    </div> `;

        mealList.appendChild(mealElement);
    })
}

//seach meals
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

document.addEventListener("DOMContentLoaded", fetchMealList);

export { categoryElement, mealElement, searchMeals, searchBtn, mealList, mealBtn, mealEle };
