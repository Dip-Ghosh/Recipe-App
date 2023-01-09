
const categoryNameWithImage = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const categories = await response.json();
    addCategoriesToDiv(categories.categories);
}

const addCategoriesToDiv = (categories) => {
    const categoryMeals = document.getElementById('category-meal')

    const mealEle = document.getElementById('meals');
    mealEle.style.display='none';
    categoryMeals.style.display='block';

    categories.forEach((category, index) => {
        const meal = document.createElement("div");
        meal.classList.add("row");

        meal.innerHTML = `
                    <div class="col d-flex align-items-stretch">
                        <div class="card mb-4 rounded-3 shadow-sm ">
                            <div class="card-header py-3">
                                <img src="${category.strCategoryThumb}" class="card-img-top" alt="${category.strCategoryThumb}">
                            </div>
                            <div class="card-body">
                                <h1 class="card-title pricing-card-title">${category.strCategory}</h1>
                               <p class="card-text content-jusity text-muted text-truncate">${category.strCategoryDescription}</p>
                                <button type="button" onclick="details(${category.idCategory})" class="w-100 btn btn-lg btn-primary" id="${category.idCategory}">See More</button>
                            </div>
                        </div>
                    </div>  
        `
        categoryMeals.appendChild(meal);
    })
}

categary.addEventListener('click', (e) => {
    e.preventDefault();
    categoryNameWithImage();
})