let cocktailSearch = document.getElementById("search");


cocktailSearch.addEventListener(("click"), function() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        });

    alert("no drink!")
    alert("yep")

});