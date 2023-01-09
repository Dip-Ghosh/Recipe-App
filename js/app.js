
const productCategory = document.getElementById('product-category');
const categoryMeals   = document.getElementById('category-meals')


//fetch categories only name
const categoryOnlyName = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
    const categories = await response.json();
    addCategory(categories.meals);
}

//fetch category with name and image
const categoryNameWithImage = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const categories = await response.json();
    addCategoriesToDiv(categories.categories);
}

//add categories to navbar
const addCategory = (categories) => {

    categories.forEach((category) => {
        let item     = document.createElement('li');
        let elementA = document.createElement('a');

        item.classList.add('nav-item');
        elementA.classList.add('nav-link');

        item.appendChild(elementA);

        elementA.innerHTML = category.strCategory;

        productCategory.appendChild(item);
    })
}

//add category to the body
const addCategoriesToDiv = (categories) => {

    categories.forEach((category, index) => {

        console.log(category);
        const meal = document.createElement("div");
        meal.classList.add("row");

        meal.innerHTML = `
                    <div class="col">
                        <div class="card mb-4 rounded-3 shadow-sm">
                            <div class="card-header py-3">
                                <img src="${category.strCategoryThumb}" class="card-img-top" alt="${category.strCategoryThumb}">
                            </div>
                            <div class="card-body">
                                <h1 class="card-title pricing-card-title">${category.strCategory}</h1>
                               <p class="card-text content-jusity d-flex align-items-stretch">${ category.strCategoryDescription}</p>
                                <button type="button" class="w-100 btn btn-lg btn-primary">See More</button>
                            </div>
                        </div>
                    </div>  
        `
        categoryMeals.appendChild(meal);
    })
}

categoryNameWithImage();
categoryOnlyName();
// document.addEventListener("DOMContentLoaded", category);