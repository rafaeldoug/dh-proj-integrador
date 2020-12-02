const localPath = 'file:///D:/DOUG/CURSOS/facebook-estacao-hack-2020/html/proj-integrador/agora-sou-chef';

let searchForm = document.querySelector('.js-search-form');
let searchInput = document.querySelector('.js-search-form input');

let listMeals = [];

searchForm.addEventListener('submit', (ev) => {
  ev.preventDefault();

  let meal = searchInput.value;

  search(meal);

  // window.location.replace(`${localPath}/pages/receitas.html`);

});

function search(meal) {
  fetch(`https://themealdb.p.rapidapi.com/search.php?s=${meal}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "7864672b4emsha51fa4ea4a0606cp106a24jsnc1bc1fbef9b3",
      "x-rapidapi-host": "themealdb.p.rapidapi.com"
    }
  })
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.meals.length; i++) {
      listMeals.push({
        id: data.meals[i].idMeal,
        thumb: data.meals[i].strMealThumb,
        name: data.meals[i].strMeal,
        category: data.meals[i].strCategory,
        area: data.meals[i].strArea
      });
    }
  })
  .catch(err => {
    console.error(err);
  });
}

