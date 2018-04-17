var activeCuisine = 0
var activeIngredient = 0
var menuOpen = false

var queryResult = []

var initFilterDropdownMenu = function() {
    cuisines.forEach(cuisine => { 
        $('#cuisine-dropdown-menu').append(
            '<li id="' + cuisine.id + '"><a href="#" style="text-transform: capitalize">' +
                '<img src="' + cuisine.img + '" class="dropdown-icon" /> ' + cuisine.id + 
            '</a></li>'
        )
        $("li#"+cuisine.id+' > a').click(e => {
            e.preventDefault()
            activeCuisine = cuisine.id
            $('#activeCuisine').html(
                '<span><img src="' + cuisine.img + '" class="dropdown-icon" /> ' + cuisine.id + '</span><span class="caret"></span>'
            )
            executeQueryAndDisplay()
        })
    })
    ingredients.forEach(ingredient => { 
        $('#ingredient-dropdown-menu').append(
            '<li id="' + ingredient.id + '"><a href="#" style="text-transform: capitalize">' +
                '<img src="' + ingredient.img + '" class="dropdown-icon" /> ' + ingredient.id + 
            '</a></li>'
        )
        $("li#"+ingredient.id+' > a').click(e => {
            e.preventDefault()
            activeIngredient = ingredient.id
            $('#activeIngredient').html(
                '<span><img src="' + ingredient.img + '" class="dropdown-icon" /> ' + ingredient.id + '</span><span class="caret"></span>'
            )
            executeQueryAndDisplay()
        })
    })
}

var clearCuisineFilter = function() {
    activeCuisine = 0;
    $('#activeCuisine').html('Filter by Cuisine <span class="caret"></span>')
    executeQueryAndDisplay()
}
var clearIngredientFilter = function() {
    activeIngredient = 0;
    $('#activeIngredient').html('Filter by Ingredient <span class="caret"></span>')
    executeQueryAndDisplay()
}

var createResultComponent = function(item) {
    var imgTag = '<img class="result-img" src="' + item.img + '" />'
    var nameTag = '<div class="result-name">' + item.name + '</div>'
    var valueTag = '<div class="result-value">' + item.value + '</div>'
    
    var result = '<div class="col-md-4">' + imgTag + nameTag + valueTag + '</div>'
    return result
}

var executeQueryAndDisplay = () => {
    console.log(activeCuisine, activeIngredient)
    queryResult = []
    if (activeCuisine && activeIngredient) {
        // Tampilin activeCuisine dan activeIngredient
        var cuisine = cuisines.find(x => x.id === activeCuisine)
        var probability = cuisine.probability[activeIngredient]
        var ingredientImg = ingredients.find(x => x.id === activeIngredient).img
        queryResult.push({ name: activeIngredient, value: probability, img: ingredientImg  })
    } else if (activeCuisine) {
        // Tampilin activeCuisine dan SEMUA ingredients
        var cuisine = cuisines.find(x => x.id === activeCuisine)
        var probability = cuisine.probability
        Object.keys(cuisine.probability).forEach(ingred => {
            var ingredientImg = ingredients.find(x => x.id === ingred).img
            queryResult.push({ name: ingred, value: probability[ingred], img: ingredientImg })
        })
    } else if (activeIngredient) {
        // Tampilin cuisine2 yg paling besar probabilitynya di ingredients tsb.
        cuisines.forEach(cuisine => {
            var activeIngredientProbability = (cuisine.probability[activeIngredient]) ? cuisine.probability[activeIngredient] : 0.0
            queryResult.push({ name: cuisine.id, img: cuisine.img, value: activeIngredientProbability })
        })
    }
    queryResult.sort((a, b) => b.value - a.value)
    displayFiltered()
    }

var displayFiltered = function () {
    $('#result').fadeToggle(500, () => {
        $('#result').empty()
        if (queryResult.length > 0) {
            queryResult.forEach(result => $('#result').append(createResultComponent(result)))
        } else {
            $('#result').append('<p>Still no result :(</p>')
        }
        $('#result').fadeToggle(500)
    })
}

var toggleOpen = function () {
    if (menuOpen) { $('#main-container').css({ right: -700 }); menuOpen = false }
    else { $('#main-container').css({ right: 0 }); menuOpen = true }
}