let cocktailSearch = document.getElementById("search");

cocktailSearch.addEventListener(("click"), function() {

    let cocktailElement = document.getElementById("cocktailInput").value;
    let cocktail = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailElement}`

    fetch(cocktail)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            return data.drinks;
        })
        .then(list => {
            console.log(list);
            for (i = 0; i < list.length; i++) {

                let cocktailName = list[i].strDrink;
                console.log(cocktailName);
                let cocktailImage = list[i].strDrinkThumb;
                console.log(cocktailImage);
                let cocktailCategory = list[i].strAlcoholic + "<br>" + list[i].strCategory;
                console.log(cocktailCategory);
                /*let cocktailIngredients = list[i].strMeasure + " " + list[i].strIngredients;
                console.log(cocktailIngredients);*/
                let cocktailInstructions = list[i].strInstructions;
                console.log(cocktailInstructions);
                let cocktailGlass = list[i].strGlass;
                console.log(cocktailGlass);


                let nameElement = document.querySelector(".cocktailName p");
                console.log(nameElement);
                nameElement.innerHTML = cocktailName;

                let imageElement = document.querySelector(".cocktailImage");
                console.log(imageElement);
                imageElement.src = cocktailImage;

                let categoryElement = document.querySelector(".cocktailCategory p");
                console.log(categoryElement);
                categoryElement.innerHTML = cocktailCategory;

                let instructionsElement = document.querySelector(".cocktailInstructions p");
                instructionsElement.innerHTML = cocktailInstructions;

                let glassElement = document.querySelector(".cocktailGlass p");
                glassElement.innerHTML = cocktailGlass;
            }

        })
        .catch(err => {
            console.log(err)
        });





});