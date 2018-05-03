var activeCuisine = 0
var activeIngredient = 0
var menuOpen = false
var displayChartActive = false

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
    var valueTag = '<div class="result-value">' + Math.round((item.value || 0.0)* 10000)/100 + ' %</div>'
    
    var result = '<div class="col-md-4">' + imgTag + nameTag + valueTag + '</div>'
    return result
}

var executeQueryAndDisplay = () => {
    var displayIngredient = true
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
        displayIngredient = false
    }
    queryResult.sort((a, b) => b.value - a.value)
    displayFiltered(displayIngredient)
}


var myChart = null
var displayChart = function (labels, data, ingred) {
    if (labels.length == 0) {
        $('#myChart').css({ display: 'none' })
        return
    } else {
        $('#myChart').css({ display: 'block' })
    }

    if (!myChart) myChart = new Chart($('#myChart'), { type: 'bar', data: {}, options: {} })

    var lookup = ingred ? ingredients : cuisines
    var tmp1 = labels.map(x => lookup.find(y => y.id === x).chartBg)

    var chartData = {
        labels: labels,
        datasets: [{
            label: 'Probability',
            data: data,
            backgroundColor: tmp1
        }]
    }

    var chartOptions = {
        layout: {
            padding: { top: 20 }
        },
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }],
            xAxes: [{
                ticks: {
                    autoskip: false,
                    minRotation: ingred ? 80 : 0,
                    maxRotation: ingred ? 80 : 0
                }
            }]
        }
    }

    myChart.data = chartData; myChart.options = chartOptions
    myChart.update()
}

var displayFiltered = function (ingred) {
    $('#result').fadeToggle(500, () => {
        $('#result').empty()
        if (queryResult.length > 0) {
            if (displayChartActive)
                displayChart(
                    queryResult.map(x => x.name),
                    queryResult.map(x => Math.round((x.value || 0.0)* 10000)/100),
                    ingred
                )
            else {
                // $('#myChart').fadeToggle(200, () => {
                $('#myChart').css({ display: 'none' })
                // })
                queryResult.forEach(result => $('#result').append(createResultComponent(result)))
            }
        } else {
            $('#myChart').css({ display: 'none' })
            $('#result').append('<div class="col-md-12" style="text-align: center">' +
                '<span class="glyphicon glyphicon-sunglasses" style="font-size: 2em"></span><br/>' +
                'No Result' +
                '</div>')
        }
        $('#result').fadeToggle(500)
    })
}

var toggleOpen = function () {
    if (menuOpen) {
        $('.glass-tint').css({ opacity: 0 })
        setTimeout(() => $('.glass-tint').css({ display: 'none' }), 500)
        $('#main-container').css({ right: -700 })
        setTimeout(() => $('#filter-btn').css({ left: '-3em' }), 1250)
        $('#filter-btn > span').fadeToggle(500, () => {
            $('#filter-btn > span').toggleClass('glyphicon-chevron-right glyphicon-search')
            $('#filter-btn > span').css({ color: '' })
            $('#filter-btn > span').fadeToggle(500)
        })
        menuOpen = false 
    }
    else { 
        $('.glass-tint').css({ display: '' })
        setTimeout(() => $('.glass-tint').css({ opacity: 0.5 }), 250)
        $('#main-container').css({ right: 0 })
        $('#filter-btn').css({ left: '-4em' })
        $('#filter-btn > span').fadeToggle(500, () => {
            $('#filter-btn > span').toggleClass('glyphicon-search glyphicon-chevron-right')
            $('#filter-btn > span').css({ color: 'orangered' })
            $('#filter-btn > span').fadeToggle(500)
        })
        menuOpen = true 
    }
}

var initFilterButton = function () {
    $('#filter-btn').click(toggleOpen)
    $('#filter-btn').hover(() => {
        if (!menuOpen) {
            $('#filter-btn').css({ left: '-4em' })
        }
    }, () => {
        if (!menuOpen) {
            $('#filter-btn').css({ left: '-3em' })
        }
    })
    $('#displayChartToggle').click(() => { 
        displayChartActive = displayChartActive ? false : true
        executeQueryAndDisplay() 
    })
}