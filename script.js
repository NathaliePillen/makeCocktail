let cocktailSearch = document.getElementById("search");

cocktailSearch.addEventListener(("click"), function() {

    let cocktailEllement = document.getElementById("cocktailInput").value;
    let cocktail = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailEllement}`

    fetch(cocktail)
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data => {
            console.log(data);
            return data.drinks;
        })
        .then(dataDrink => {

            console.log(dataDrink);
        })
        .catch(err => {
            console.log(err)
        });





});