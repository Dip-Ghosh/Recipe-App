
const productCategory = document.getElementById('product-category')

//fetch categories
const category = async () => {
    const response = (await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list'));
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

//fetch Products

const products = async ()
document.addEventListener("DOMContentLoaded", category);