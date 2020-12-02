let dropdownMenu = document.querySelector('.js-dropdown-menu');

function makeDropdownMenu() {
  fetch("https://themealdb.p.rapidapi.com/list.php?c=list", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "7864672b4emsha51fa4ea4a0606cp106a24jsnc1bc1fbef9b3",
      "x-rapidapi-host": "themealdb.p.rapidapi.com"
    }
  })
    .then(response => response.json())
    .then(data => {
      let id = 0;
      
      for (let i = 0; i < data.meals.length; i++) {
        id++;
        var category = data.meals[i].strCategory;

        dropdownMenu.innerHTML += `
        <a id="option-${id}" class="dropdown-item" href="#" onclick="makeByCategoryList('${category}')">${data.meals[i].strCategory}</a>
        `;
      }


    })
    .catch(err => {
      console.error(err);
    });
}

function makeByCategoryList(categoria) {
  // window.location.replace('http://127.0.0.1:5500/pages/receitas-categoria.html');

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

makeDropdownMenu();