
const productCategory = document.getElementById('product-category');

const searchMeals     = document.getElementById('search-term')
const searchBtn       = document.getElementById('search')


//fetch categories only name
const categoryOnlyName = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
    const categories = await response.json();
    addCategory(categories.meals);
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

const singleCategory = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast');
    const categories = await response.json();
    addCategory(categories.meals);
}


const details = async (id) => {

    console.log(id);
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id);
    const categories = await response.json();
    console.log(categories);
}
const findMealsByName = async (searchMeal) => {
    const response = await fetch('www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata');
    const categories = await response.json();
    console.log(categories);
    // return categories;
}
searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const value = findMealsByName(searchMeals.value);
    console.log(value);
})

categoryOnlyName();


// document.addEventListener("DOMContentLoaded", category);