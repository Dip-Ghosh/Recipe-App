
const productCategory = document.getElementById('product-category');
const categary = document.getElementById('category');


const categoryOnlyName = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
    const categories = await response.json();
    console.log(categories);
    addCategory(categories.meals);
}

const addCategory = (categories) => {

    console.log(categories);
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


// categoryOnlyName();