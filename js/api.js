import {addCategory} from './navbar'



//random meals
const randomMeals   = async () => {

    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const meals   = await response.json();

    addMealToDiv(meals.meals[0]);
}



//category list

const categoryNameWithImage = async () => {

    const response   = await fetch('');
    const categories = await response.json();

    addCategoriesToDiv(categories.categories);
}


