// let searchForm = document.querySelector('.js-search-form');
// let searchInput = document.querySelector('.js-search-form input');
// let cardColumns = document.querySelector('.js-card-columns');
let titulo = document.querySelector('.js-titulo');

function makeByCategoryList(categoria) {
  let currentLocation = window.location;

  if (currentLocation.pathname != '/pages/receitas-categoria.html') {
    window.location = `${window.location.origin}/pages/receitas-categoria.html`;
  }

  fetch(`https://themealdb.p.rapidapi.com/filter.php?c=${categoria}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "7864672b4emsha51fa4ea4a0606cp106a24jsnc1bc1fbef9b3",
      "x-rapidapi-host": "themealdb.p.rapidapi.com"
    }
  })
    .then(response => response.json())
    .then(data => {

      cardColumns.innerHTML = '';

      for (let i = 0; i < data.meals.length; i++) {
        cardColumns.innerHTML += `
              <div class="card">
                <img src="${data.meals[i].strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${data.meals[i].strMeal}</h5>
                </div>
              </div>
            `;
      }
    })
    .catch(err => {
      console.error(err);
    });
}

let categoria = sessionStorage.getItem('categoria');
titulo.innerHTML = categoria;

makeByCategoryList(categoria);