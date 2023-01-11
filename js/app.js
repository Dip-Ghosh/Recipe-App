const searchMeals = document.getElementById('search-term')
const searchBtn = document.getElementById('search')


const searchBySingleAlphabet = async (key) => {

    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=' + key);
    let meals = await response.json();
    AddSearchValueToValue(meals.meals);
}

const searchById = async (id) => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id);
    const meals    = await response.json();
    AddSearchValueToValue(meals.meals);
}

const searchByName = async (Name) => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + Name);
    const meals = await response.json();
    console.log(meals);
    AddSearchValueToValue(meals.meals);

}

const AddSearchValueToValue = (meals) => {

    meals.forEach((meal) => {

        const mealElement  = document.createElement("div");

        mealElement.classList.add("row");
        mealElement.innerHTML  = `
                    <div class="col d-flex align-items-stretch">
                        <div class="card mb-4 rounded-3 shadow-sm ">
                            <div class="card-header py-3">
                                <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strCategoryThumb}">
                            </div>
                            <div class="card-body">
                                <h1 class="card-title pricing-card-title">${meal.strCategory}</h1>
                               <p class="card-text content-jusity text-muted text-truncate">${meal.strCategoryDescription}</p>
                                <button type="button" onclick="details(${meal.idCategory})" class="w-100 btn btn-lg btn-primary" id="${meal.idCategory}">See More</button>
                            </div>
                        </div>
                    </div> `;

        categoryMeals.appendChild(mealElement);
    })
}

const checkIsNumber = (str) => {

    return /^\d+$/.test(str);

}


searchBtn.addEventListener('click', (e) => {

    e.preventDefault();

    let searchKey = searchMeals.value.trim();

    if (checkIsNumber(searchKey)) {
        searchById(searchKey);
    } else if(searchKey.length  == 1) {
        searchBySingleAlphabet(searchKey);
    }
    else{
        searchByName(searchKey)
    }


})



// document.addEventListener("DOMContentLoaded", category);