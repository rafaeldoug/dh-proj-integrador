let searchForm = document.querySelector('.js-search-form');
let searchInput = document.querySelector('.js-search-form input');
let cardColumns = document.querySelector('.js-card-columns');


if (window.location.pathname === "/pages/receitas.html") {
  searchForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
  
    let meal = searchInput.value;
  
    makeRecipesList(meal);
  
  });
}

function makeRecipesList(meal) {
  fetch(`https://themealdb.p.rapidapi.com/search.php?s=${meal}`, {
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
                  <p class="card-text">Categoria: ${data.meals[i].strCategory}</p>
                  <p class="card-text">Area: ${data.meals[i].strArea}</p>
                </div>
              </div>
            `;
      }
      handleCardStyle();
    })
    .catch(err => {
      console.error(err);
    });
}

function handleCardStyle() {
  let cards = document.querySelectorAll('.card');

  for (let card of cards) {
    card.onmouseover = function () {
      this.style.borderBottom = "3px solid rgba(255,65,65,1";
      this.style.borderTop = "3px solid rgba(255,65,65,1";
    }

    card.onmouseout = function () {
      this.style.border = "1px solid rgba(0,0,0,.125";
    }
  }
}

