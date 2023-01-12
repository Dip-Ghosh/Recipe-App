
export { categoryElement, mealElement, searchMeals, searchBtn, mealList, mealBtn, mealEle  } from './app.js'


//random meals
const randomMeals   = async () => {

    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const meals   = await response.json();

    addMealToDiv(meals.meals[0]);
}

//fetch meal list
const fetchMealList = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast');
    let meals = await response.json();
    loadMeals(meals.meals);
}

//search by single character
const searchBySingleAlphabet = async (key) => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=' + key);
    let meals = await response.json();
    filterMeals(meals.meals);
}

//search by id
const searchById = async (id) => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id);
    const meals    = await response.json();
    filterMeals(meals.meals);
}

//search by name
const searchByName = async (Name) => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + Name);
    const meals = await response.json();
    filterMeals(meals.meals);
}

//is number check
const checkIsNumber = (str) => {

    return /^\d+$/.test(str);

}

//category list

const categoryNameWithImage = async () => {

    const response   = await fetch('');
    const categories = await response.json();

    addCategoriesToDiv(categories.categories);
}

