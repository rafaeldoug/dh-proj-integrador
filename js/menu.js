let dropdownMenu = document.querySelector('.js-dropdown-menu');

let cat = '';

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
        var categoria = data.meals[i].strCategory;

        dropdownMenu.innerHTML += `
        <a id="option-${id}" class="dropdown-item" onclick="getCategoria('#option-${id}')">${data.meals[i].strCategory}</a>
        `;
      }


    })
    .catch(err => {
      console.error(err);
    });
}

function getCategoria(id) {

  let categoria = document.querySelector(`${id}`).innerText;

  sessionStorage.setItem('categoria', categoria);
  
  let currentLocation = window.location;

  if (currentLocation.pathname != '/pages/receitas-categoria.html') {
    window.location = `${window.location.origin}/pages/receitas-categoria.html`;
  } else {
    window.location.reload();
  }

}

makeDropdownMenu();