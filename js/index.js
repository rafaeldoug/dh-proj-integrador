let card1 = document.querySelector('.js-card-1');
let card2 = document.querySelector('.js-card-2');
let card3 = document.querySelector('.js-card-3');

function makeHomeCards(card) {
  fetch("https://themealdb.p.rapidapi.com/random.php", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "7864672b4emsha51fa4ea4a0606cp106a24jsnc1bc1fbef9b3",
      "x-rapidapi-host": "themealdb.p.rapidapi.com"
    }
  })
    .then(response => response.json())
    .then(data => {
      let meal = {
        thumb: data.meals[0].strMealThumb,
        name: data.meals[0].strMeal
      };

      card.innerHTML = `
        <img src="${meal.thumb}" class="card-img-top" alt="Foto da receita de ${meal.name}">
        <div class="card-body">
          <h5 class="card-title">${meal.name}</h5>
        </div>
      `

    })
    .catch(err => {
      console.error(err);
    });
}

makeHomeCards(card1);
makeHomeCards(card2);
makeHomeCards(card3);
