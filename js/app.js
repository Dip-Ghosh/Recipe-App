const searchMeals = document.getElementById('search-term')
const searchBtn = document.getElementById('search')


const searchByFullName = async (name) => {

    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=' + name);
    let meals = await response.json();
    searchValue(meals.meals);
}



const searchValue = (meals) => {

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

// const singleCategory = async () => {
//
//     const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast');
//     const categories = await response.json();
//     addCategory(categories.meals);
// }


// const details = async (id) => {
//
//     console.log(id);
//     const response = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id);
//     const categories = await response.json();
//     console.log(categories);
// }


searchBtn.addEventListener('click', (e) => {

    e.preventDefault();
    let searchKey = searchMeals.value;

    if (Number.isInteger(searchKey)) {

    }
    searchByFullName();

})

// categoryOnlyName();


// document.addEventListener("DOMContentLoaded", category);