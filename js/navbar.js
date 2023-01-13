
const productCategory = document.getElementById('product-category');

const categoryOnlyName = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
    const categories = await response.json();
    addCategory(categories.meals);
}

const addCategory = (categories) => {

    categories.forEach((category) => {
        let item     = document.createElement('li');
        let elementA = document.createElement('a');

        elementA.classList.add('dropdown-item');
        item.appendChild(elementA);
        elementA.innerHTML = category.strCategory;
        productCategory.appendChild(item);
    })
}

document.addEventListener('DOMContentLoaded', categoryOnlyName);

export { categoryOnlyName }