const mealBtn       = document.getElementById('random-meals');
const mealEle       = document.getElementById('meals');

const randomMeals = async () => {

    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const meals   = await response.json();

    addMealToDiv(meals.meals[0]);
}

const addMealToDiv = (meal) => {

    const mealElement = document.createElement("div");
    mealEle.innerHTML = '';
    mealElement.classList.add("row");

    mealElement.innerHTML = `
                   <div class="col">
                        <div class="card mb-12 rounded-3 shadow-sm ">
                            <div class="card-header py-3">
                                <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMealThumb}">
                            </div>
                            <div class="card-body">
                                <h1 class="card-title pricing-card-title">${meal.strCategory}</h1>
                                <button type="button" onclick="details(${meal.idMeal})" class="w-100 btn btn-lg btn-primary" id="${meal.idMeal}">See More</button>
                            </div>
                        </div>
                    </div>  
        `

    mealEle.appendChild(mealElement);
}

mealBtn.addEventListener('click', (e) => {
    e.preventDefault();

    categoryMeals.hidden = true;
    mealEle.hidden       = false;
    randomMeals();
})
