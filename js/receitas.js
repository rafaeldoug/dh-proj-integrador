let searchForm = document.querySelector(".js-search-form");
let searchInput = document.querySelector(".js-search-form input");
let cardColumns = document.querySelector(".js-card-columns");

const URL_LIST1 = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
var listIngredient = [];
var listItens = [];

searchForm.addEventListener("submit", (ev) => {
  ev.preventDefault();

  let meal = searchInput.value;
  if (meal.trim() != "") {
    listItens = [];
    makeRecipesList(meal);
  }
});

async function makeRecipesList(meal) {
  await fetch(`https://themealdb.p.rapidapi.com/search.php?s=${meal}`, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "7864672b4emsha51fa4ea4a0606cp106a24jsnc1bc1fbef9b3",
      "x-rapidapi-host": "themealdb.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      cardColumns.innerHTML = "";

      listItens.push(data);
    })
    .catch((err) => {
      console.error(err);
    });

  await addCard();
}

async function addCard() {
  if (listItens === undefined) return;
  if (listItens[0].meals === null) return;

  for (let i = 0; i < listItens[0].meals.length; i++) {
    await fetch(URL_LIST1 + listItens[0].meals[i].idMeal)
      .then((response) => response.json())
      .then((data) => {
        listIngredient.push(data.meals[0]);

        cardColumns.innerHTML += `
        <div class="card" data-toggle="modal" data-target="#ExemploModalCentralizado${
          listItens[0].meals[i].idMeal
        }" onClick="ajustaListaIngredientes(${listItens[0].meals[i].idMeal})">
          <img src="${
            listItens[0].meals[i].strMealThumb
          }" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${listItens[0].meals[i].strMeal}</h5>
            <p class="card-text">Categoria: ${
              listItens[0].meals[i].strCategory
            }</p>
            <p class="card-text">Area: ${listItens[0].meals[i].strArea}</p>
          </div>
          
          <!-- Modal -->
          <div class="modal fade" id="ExemploModalCentralizado${
            listItens[0].meals[i].idMeal
          }" tabindex="-1" role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="TituloModalCentralizado">${
                    listItens[0].meals[i].strMeal
                  }</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="ingredients-list">
                    <p><b>Você vai precisar</b></p>
                    <ul id ="list-ingredients${listItens[0].meals[i].idMeal}"> 
                    <li>${
                      listIngredient[i].strMeasure1 +
                      " - " +
                      listIngredient[i].strIngredient1
                    }</li>
                    <li>${
                      listIngredient[i].strMeasure2 +
                      " - " +
                      listIngredient[i].strIngredient2
                    }</li>
                    <li>${
                      listIngredient[i].strMeasure3 +
                      " - " +
                      listIngredient[i].strIngredient3
                    }</li>
                    <li>${
                      listIngredient[i].strMeasure4 +
                      " - " +
                      listIngredient[i].strIngredient4
                    }</li>
                    <li>${
                      listIngredient[i].strMeasure5 +
                      " - " +
                      listIngredient[i].strIngredient5
                    }</li>
                    <li>${
                      listIngredient[i].strMeasure6 +
                      " - " +
                      listIngredient[i].strIngredient6
                    }</li>
                    <li>${
                      listIngredient[i].strMeasure7 +
                      " - " +
                      listIngredient[i].strIngredient7
                    }</li>
                    <li>${
                      listIngredient[i].strMeasure8 +
                      " - " +
                      listIngredient[i].strIngredient8
                    }</li>
                    <li>${
                      listIngredient[i].strMeasure9 +
                      " - " +
                      listIngredient[i].strIngredient9
                    }</li>
                    <li>${
                      listIngredient[i].strMeasure10 +
                      " - " +
                      listIngredient[i].strIngredient10
                    }</li>
                    <li>${
                      listIngredient[i].strMeasure11 +
                      " - " +
                      listIngredient[i].strIngredient11
                    }</li>
                    <li>${
                      listIngredient[i].strMeasure12 +
                      " - " +
                      listIngredient[i].strIngredient12
                    }</li>
                    <li>${
                      listIngredient[i].strMeasure13 +
                      " - " +
                      listIngredient[i].strIngredient13
                    }</li>
                    <li>${
                      listIngredient[i].strMeasure14 +
                      " - " +
                      listIngredient[i].strIngredient14
                    }</li>
                    <li>${
                      listIngredient[i].strMeasure15 +
                      " - " +
                      listIngredient[i].strIngredient15
                    }</li>
                    <li>${
                      listIngredient[i].strMeasure16 +
                      " - " +
                      listIngredient[i].strIngredient16
                    }</li>
                    <li>${
                      listIngredient[i].strMeasure17 +
                      " - " +
                      listIngredient[i].strIngredient17
                    }</li>
                    <li>${
                      listIngredient[i].strMeasure18 +
                      " - " +
                      listIngredient[i].strIngredient18
                    }</li>
                    <li>${
                      listIngredient[i].strMeasure19 +
                      " - " +
                      listIngredient[i].strIngredient19
                    }</li>
                    <li>${
                      listIngredient[i].strMeasure20 +
                      " - " +
                      listIngredient[i].strIngredient20
                    }</li>
                    </ul>
                  </div>
                  <p><b>Modo de preparo</b></p>
                  <p>${listIngredient[i].strInstructions}</p>
                  <div id="link-youtube">
                  <p><b>Assistir receita</b></p>
                  <a href="${
                    listIngredient[i].strYoutube
                  }"target="_blank"><img id="img-logo" src="../img/youtube-logo.png"></a></div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      handleCardStyle();

      })
      .catch((err) => {
        console.error(err);
      });
  }
}

function ajustaListaIngredientes(id) {
  var p = document.getElementById("list-ingredients" + id);
  var filhos = p.childNodes;
  for (let i = 0; i < filhos.length; i++) {
    if (
      filhos[i].tagName == "LI" &&
      (filhos[i].innerHTML.trim() == "-" ||
        filhos[i].innerHTML.trim() == "null - null" ||
        filhos[i].innerHTML.trim() == "- null")
    ) {
      p.removeChild(filhos[i]);
    }
    if (
      filhos[i].tagName == "LI" &&
      filhos[i].innerHTML.trim().substr(0, 1) == "-"
    ) {
      filhos[i].innerHTML = filhos[i].innerHTML.trim().substr(2);
    }
  }
}

function handleCardStyle() {
  let cards = document.querySelectorAll('.card');

  for (let card of cards) {
    card.onmouseover = function () {
      this.style.borderBottom = "3px solid rgba(255,65,65,1)";
      this.style.borderTop = "3px solid rgba(255,65,65,1)";
    }

    card.onmouseout = function () {
      this.style.border = "1px solid rgba(0,0,0,.125)";
    }
  }
}

