// -- DATA
var cuisines = [
    {
        id: "british",
        img: "public/__default.png",
        x: 886,
        y: 173,
        probability: {
            flour: 0.555,
            egg: 0.52,
            cream: 0.225,
            milk: 0.375,
            potato: 0.175,
            cheese: 0.125
        },
        worldmapDisplayedIngredients: ['flour', 'egg', 'milk', 'cream', 'potato', 'cheese']
    },
    {
        id: "italian",
        img: "public/__default.png",
        x: 1082,
        y: 334,
        probability: {
            cheese: 0.545,
            olive: 0.435,
            tomato: 0.305,
            basil: 0.21,
            lemon: 0.2,
            egg: 0.145
        },
        worldmapDisplayedIngredients: ['cheese', 'olive', 'tomato', 'basil', 'lemon', 'egg']
    },
    {
        id: "moroccan",
        img: "public/__default.png",
        x: 826,
        y: 430,
        probability: {
            olive: 0.55,
            lemon: 0.41,
            ginger: 0.315,
            tomato: 0.34,
            paprika: 0.275,
            carrot: 0.23,
        },
        worldmapDisplayedIngredients: ['olive', 'lemon', 'ginger', 'tomato', 'paprika', 'carrot']
    },
    {
        id: "indian",
        img: "public/__default.png",
        x: 1379,
        y: 474,
        probability: {
            ginger: 0.505,
            tomato: 0.435,
            mustard: 0.225,
            lemon: 0.2,
            coconut: 0.175,
            potato: 0.155
        },
        worldmapDisplayedIngredients: ['ginger', 'tomato', 'mustard', 'lemon', 'coconut', 'potato']
    },
    {
        id: "chinese",
        img: "public/__default.png",
        x: 1519,
        y: 276,
        probability: {
            ginger: 0.55,
            corn: 0.395,
            egg: 0.235,
            carrot: 0.135,
            flour: 0.11,
            noodle: 0.105
        },
        worldmapDisplayedIngredients: ['ginger', 'corn', 'egg', 'carrot', 'flour', 'noodle']
    },
    {
        id: "korean",
        img: "public/__default.png",
        x: 1734,
        y: 332,
        probability: {
            ginger: 0.39,
            carrot: 0.235,
            egg: 0.195,
            cabbage: 0.115,
            mushroom: 0.11,
            flour: 0.085
        },
        worldmapDisplayedIngredients: ['ginger', 'carrot', 'egg', 'cabbage', 'mushroom', 'flour']
    },
    {
        id: "thai",
        img: "public/__default.png",
        x: 1607,
        y: 562,
        probability: {
            lime: 0.535,
            ginger: 0.335,
            coconut: 0.325,
            noodle: 0.175,
            carrot: 0.13,
            egg: 0.095
        },
        worldmapDisplayedIngredients: ['lime', 'ginger', 'coconut', 'noodle', 'carrot', 'egg']
    },
    {
        id: "brazilian",
        img: "public/__default.png",
        x: 632,
        y: 679,
        probability: {
            lime: 0.325,
            olive: 0.28,
            tomato: 0.245,
            milk: 0.235,
            coconut: 0.23,
            egg: 0.185
        },
        worldmapDisplayedIngredients: ['lime', 'olive', 'tomato', 'milk', 'coconut', 'egg']
    },
    {
        id: "mexican",
        img: "public/__default.png",
        x: 275,
        y: 470,
        probability: {
            cheese: 0.4,
            tortilla: 0.385,
            lime: 0.31,
            olive: 0.285,
            tomato: 0.27,
            cream: 0.245
        },
        worldmapDisplayedIngredients: ['cheese', 'tortilla', 'lime', 'olive', 'tomato', 'cream']
    }
]

var ingredients = [
    {
        id: "flour",
        img: "public/ing/flour.png",
    },
    {
        id: "tomato",
        img: "public/ing/tomato.png",
    },
    {
        id: "carrot",
        img: "public/ing/carrot.png",
    },
    {
        id: "mushroom",
        img: "public/ing/mushroom.png",
    },
    {
        id: "tortilla",
        img: "public/ing/tortilla.png",
    },
    {
        id: "egg",
        img: "public/ing/egg.png",
    },
    {
        id: "mustard",
        img: "public/ing/mustard.png",
    },
    {
        id: "lemon",
        img: "public/ing/lemon.png",
    },
    {
        id: "lime",
        img: "public/ing/lime.png",
    },
    {
        id: "corn",
        img: "public/ing/corn.png",
    },
    {
        id: "cabbage",
        img: "public/ing/cabbage.png",
    },
    {
        id: "noodle",
        img: "public/ing/noodle.png",
    },
    {
        id: "basil",
        img: "public/ing/basil.png",
    },
    {
        id: "milk",
        img: "public/ing/milk.png",
    },
    {
        id: "cream",
        img: "public/ing/cream.png",
    },
    {
        id: "potato",
        img: "public/ing/potato.png",
    },
    {
        id: "ginger",
        img: "public/ing/ginger.png",
    },
    {
        id: "coconut",
        img: "public/ing/coconut.png",
    },
    {
        id: "cheese",
        img: "public/ing/cheese.png",
    },
    {
        id: "olive",
        img: "public/ing/olive.png",
    },
    {
        id: "paprika",
        img: "public/ing/paprika.png",
    },
    {
        id: "apple",
        img: "public/__default.png",
    },
    {
        id: "banana",
        img: "public/__default.png",
    },
    {
        id: "strawberry",
        img: "public/__default.png",
    }
]