import { mealDiv } from "./main.js";

const fetchAllMeals = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast');
    let mealList = await response.json();
    loadMeals(mealList.meals);
}

const loadMeals     = (mealList) => {
    mealDiv.innerHTML = '';
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

        mealDiv.appendChild(mealElement);
    })
}

document.addEventListener("DOMContentLoaded",  fetchAllMeals);

export { fetchAllMeals }














export { loadMeals };



