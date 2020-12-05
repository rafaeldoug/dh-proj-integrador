let card1 = document.querySelector(".js-card-1");
let card2 = document.querySelector(".js-card-2");
let card3 = document.querySelector(".js-card-3");

const URL_LISTI = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

async function makeHomeCards(card) {
  let i = 0;
  let listIngredient = [];

  let meal = {
    thumb: "",
    name: "",
    id: "",
  };

  await fetch("https://themealdb.p.rapidapi.com/random.php", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "7864672b4emsha51fa4ea4a0606cp106a24jsnc1bc1fbef9b3",
      "x-rapidapi-host": "themealdb.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      meal = {
        thumb: data.meals[0].strMealThumb,
        name: data.meals[0].strMeal,
        id: data.meals[0].idMeal,
      };
    })
    .catch((err) => {
      console.error(err);
    });

  await fetch(URL_LISTI + meal.id)
    .then((response) => response.json())
    .then((data) => {
      listIngredient.push(data.meals[0]);

      card.innerHTML = `
          <img src="${
            meal.thumb
          }" class="card-img-top" alt="Foto da receita de ${meal.name}"
          data-toggle="modal" data-target="#ExemploModalCentralizado${
            meal.id
          }" onClick="ajustaListaIngredientes(${meal.id})">
          <div class="card-body">
            <h5 class="card-title">${meal.name}</h5>
          </div>
        
          <!-- Modal -->
          <div class="modal fade" id="ExemploModalCentralizado${
            meal.id
          }" tabindex="-1" role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="TituloModalCentralizado">${
                    meal.name
                  }</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="ingredients-list">
                    <p><b>Você vai precisar</b></p>
                    <ul id ="list-ingredients${meal.id}"> 
                    <li>${
                      listIngredient[0].strMeasure1 +
                      " - " +
                      listIngredient[0].strIngredient1
                    }</li>
                    <li>${
                      listIngredient[0].strMeasure2 +
                      " - " +
                      listIngredient[0].strIngredient2
                    }</li>
                    <li>${
                      listIngredient[0].strMeasure3 +
                      " - " +
                      listIngredient[0].strIngredient3
                    }</li>
                    <li>${
                      listIngredient[0].strMeasure4 +
                      " - " +
                      listIngredient[0].strIngredient4
                    }</li>
                    <li>${
                      listIngredient[0].strMeasure5 +
                      " - " +
                      listIngredient[0].strIngredient5
                    }</li>
                    <li>${
                      listIngredient[0].strMeasure6 +
                      " - " +
                      listIngredient[0].strIngredient6
                    }</li>
                    <li>${
                      listIngredient[0].strMeasure7 +
                      " - " +
                      listIngredient[0].strIngredient7
                    }</li>
                    <li>${
                      listIngredient[0].strMeasure8 +
                      " - " +
                      listIngredient[0].strIngredient8
                    }</li>

                    <li>${
                      listIngredient[0].strMeasure9 +
                      " - " +
                      listIngredient[0].strIngredient9
                    }</li>
                    <li>${
                      listIngredient[0].strMeasure10 +
                      " - " +
                      listIngredient[0].strIngredient10
                    }</li>
                    <li>${
                      listIngredient[0].strMeasure11 +
                      " - " +
                      listIngredient[0].strIngredient11
                    }</li>
                    <li>${
                      listIngredient[0].strMeasure12 +
                      " - " +
                      listIngredient[0].strIngredient12
                    }</li>
                    <li>${
                      listIngredient[0].strMeasure13 +
                      " - " +
                      listIngredient[0].strIngredient13
                    }</li>
                    <li>${
                      listIngredient[0].strMeasure14 +
                      " - " +
                      listIngredient[0].strIngredient14
                    }</li>
                    <li>${
                      listIngredient[0].strMeasure15 +
                      " - " +
                      listIngredient[0].strIngredient15
                    }</li>
                    <li>${
                      listIngredient[0].strMeasure16 +
                      " - " +
                      listIngredient[0].strIngredient16
                    }</li>
                    <li>${
                      listIngredient[0].strMeasure17 +
                      " - " +
                      listIngredient[0].strIngredient17
                    }</li>
                    <li>${
                      listIngredient[0].strMeasure18 +
                      " - " +
                      listIngredient[0].strIngredient18
                    }</li>
                    <li>${
                      listIngredient[0].strMeasure19 +
                      " - " +
                      listIngredient[0].strIngredient19
                    }</li>
                    <li>${
                      listIngredient[0].strMeasure20 +
                      " - " +
                      listIngredient[0].strIngredient20
                    }</li>
                    </ul>
                  </div>
                  <p><b>Modo de preparo</b></p>
                  <p>${listIngredient[0].strInstructions}</p>

                  <div id="link-youtube">
                  <p><b>Assistir receita</b></p>
                  <a href="${
                    listIngredient[0].strYoutube
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
    })
    .catch((err) => {
      console.error(err);
    });
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

makeHomeCards(card1);
makeHomeCards(card2);
makeHomeCards(card3);
