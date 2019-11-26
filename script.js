const input = document.getElementById("cocktailInput");
const cocktailSearch = document.getElementById("search");

// eventlistener for enter

input.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        cocktailSearch.click();
    }
})


// eventlistener for button

cocktailSearch.addEventListener(("click"), function() {

    let cocktailElement = document.getElementById("cocktailInput").value;
    let cocktail = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailElement}`

    fetch(cocktail)
        .then(response => {
            return response.json();
        })
        .then(data => {
            //console.log(data);
            return data.drinks;
        })
        .then(list => {
            console.log(list);

            // select only the first object of the array
            for (i = 0; i <= 0; i++) {

                let cocktailName = list[i].strDrink;
                //console.log(cocktailName);
                let nameElement = document.querySelector(".cocktailName p");
                //console.log(nameElement);
                nameElement.innerHTML = cocktailName;


                let cocktailImage = list[i].strDrinkThumb;
                //console.log(cocktailImage);
                let imageElement = document.querySelector(".cocktailImage");
                //console.log(imageElement);
                imageElement.src = cocktailImage;


                let cocktailCategory = list[i].strAlcoholic + "<br>" + list[i].strCategory;
                //console.log(cocktailCategory);
                let categoryElement = document.querySelector(".cocktailCategory p");
                //console.log(categoryElement);
                categoryElement.innerHTML = cocktailCategory;


                let cocktailInstructions = list[i].strInstructions;
                //console.log(cocktailInstructions);
                let instructionsElement = document.querySelector(".cocktailInstructions p");
                //console.log(instructionsElement);
                instructionsElement.innerHTML = cocktailInstructions;

                let cocktailGlass = list[i].strGlass;
                //console.log(cocktailGlass);
                let glassElement = document.querySelector(".cocktailGlass p");
                //console.log(glassElement);
                glassElement.innerHTML = cocktailGlass;


                /*const getIngredients = list[i] => {
                    let ingredient = [];
                    let i = 1;

                    do {
                        const cocktailIngredient = list[i][`strIngredient${i}`];
                        const cocktailMeasure = list[i][`strMeasure${i}`];
                        ingredients.push(`${cocktailMeasure} ${cocktailIngredient}`);
                        console.log(ingredients);
                        i++;
                    } while (list[i][`strIngredient${i}`] !== null);
                }*/

            }

        })

    .catch(err => {
        console.log(err)
    });





});