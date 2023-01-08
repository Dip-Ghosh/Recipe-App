
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
        meal.classList.add("meal");

        meal.innerHTML = `
            <div class="row col">
                <div class="card" style="width: 18rem;">
                       <img src="${category.strCategoryThumb}" class="card-img-top" alt="${category.strCategoryThumb}">
                         <div class="card-body">
                              <h5 class="card-title">${category.strCategory}</h5>
                                 <p class="card-text content-jusity">${ category.strCategoryDescription}</p>
                                 <a href="${category.idCategory}" class="btn btn-primary">Go somewhere</a>
                         </div>
                </div>
            </div>
            
             <div class="row col">
                <div class="card" style="width: 18rem;">
                       <img src="${category.strCategoryThumb}" class="card-img-top" alt="${category.strCategoryThumb}">
                         <div class="card-body">
                              <h5 class="card-title">${category.strCategory}</h5>
                                 <p class="card-text content-jusity">${ category.strCategoryDescription}</p>
                                 <a href="${category.idCategory}" class="btn btn-primary">Go somewhere</a>
                         </div>
                </div>
            </div>
            
             <div class="row col">
                <div class="card" style="width: 18rem;">
                       <img src="${category.strCategoryThumb}" class="card-img-top" alt="${category.strCategoryThumb}">
                         <div class="card-body">
                              <h5 class="card-title">${category.strCategory}</h5>
                                 <p class="card-text content-jusity">${ category.strCategoryDescription}</p>
                                 <a href="${category.idCategory}" class="btn btn-primary">Go somewhere</a>
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