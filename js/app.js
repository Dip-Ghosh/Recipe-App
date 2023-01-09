
const searchMeals     = document.getElementById('search-term')
const searchBtn       = document.getElementById('search')



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

}
searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const value = findMealsByName(searchMeals.value);

})

// categoryOnlyName();


// document.addEventListener("DOMContentLoaded", category);