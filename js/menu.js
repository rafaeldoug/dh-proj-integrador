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
      for (let i = 0; i < data.meals.length; i++) {
        dropdownMenu.innerHTML += `
        <a class="dropdown-item" href="#">${data.meals[i].strCategory}</a>
        `;
      }
    })
    .catch(err => {
      console.error(err);
    });
}

makeDropdownMenu();