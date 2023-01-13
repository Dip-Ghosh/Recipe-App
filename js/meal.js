//
// // export { categoryElement, mealElement, searchMeals, searchBtn, mealList, mealBtn, mealEle  } from './app.js'
//
//
// const addMealToDiv = (meal) => {
//
//     const mealElement = document.createElement("div");
//     mealEle.innerHTML = '';
//     mealElement.classList.add("row");
//     mealElement.innerHTML =
//                     ` <div class="col">
//                         <div class="card mb-12 rounded-3 shadow-sm ">
//                             <div class="card-header py-3">
//                                 <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMealThumb}">
//                             </div>
//                             <div class="card-body">
//                                 <h1 class="card-title pricing-card-title">${meal.strCategory}</h1>
//                                 <button type="button" onclick="details(${meal.idMeal})" class="w-100 btn btn-lg btn-primary" id="${meal.idMeal}">See More</button>
//                             </div>
//                         </div>
//                     </div>`;
//     mealEle.appendChild(mealElement);
// }
//
// //load random meals
// mealBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//
//     categories.hidden = true;
//     mealElement.hidden       = false;
//     randomMeals();
// })
