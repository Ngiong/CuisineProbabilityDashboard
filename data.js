// -- DATA
var cuisines = [
    {
        id: "brazilian",
        img: "public/brazil_flag.png",
        x: 632,
        y: 679,
        probability: {
            basil: 0.0,
           	coconut: 0.23,
            cabbage: 0.0,
            carrot: 0.055,
            cheese: 0.095,
            corn: 0.075,
            cream: 0.05,
            egg: 0.185,
            flour: 0.125,
            ginger: 0.05,
            lemon: 0.09,
            lime: 0.325,
            mushroom: 0.005,
            mustard: 0.0,
            noodle: 0.0,
            milk: 0.235,
            olive: 0.28,
            paprika: 0.015,
            potato: 0.05,
            tomato: 0.245,
            tortilla: 0.0
        },
        worldmapDisplayedIngredients: ['lime', 'olive', 'tomato', 'milk', 'coconut', 'egg'],
        chartBg: "ForestGreen",
    },
    {
        id: "british",
        img: "public/UK_flag.png",
        x: 886,
        y: 173,
        probability: {
            basil: 0.0,
            cabbage: 0.005,
            carrot: 0.08,
            cheese: 0.125,
            coconut: 0.005,
            corn: 0.075,
            cream: 0.225,
            egg: 0.52,
            flour: 0.555,
            ginger: 0.055,
            lemon: 0.115,
            lime: 0.005,
            milk: 0.375,
            mushroom: 0.065,
            mustard: 0.09,
            noodle: 0.0,
            olive: 0.08,
            paprika: 0.01,
            potato: 0.175,
            tomato: 0.06,
            tortilla: 0.0
        },
        worldmapDisplayedIngredients: ['flour', 'egg', 'milk', 'cream', 'potato', 'cheese'],
        chartBg: "DodgerBlue",
    },
    {
        id: "chinese",
        img: "public/china_flag.png",
        x: 1519,
        y: 276,
        probability: {
            basil: 0.001,
            cabbage: 0.09,
            carrot: 0.135,
            cheese: 0.01,
            coconut: 0.0,
            corn: 0.395,
            cream: 0.01,
            egg: 0.235,
            flour: 0.11,
            ginger: 0.55,
            lemon: 0.03,
            lime: 0.005,
            milk: 0.045,
            mushroom: 0.09,
            mustard: 0.025,
            noodle: 0.105,
            olive: 0.045,
            paprika: 0.001,
            potato: 0.015,
            tomato: 0.0,
            tortilla: 0.0
        },
        worldmapDisplayedIngredients: ['ginger', 'corn', 'egg', 'carrot', 'flour', 'noodle'],
        chartBg: "Crimson",
    },
    {
        id: "indian",
        img: "public/india_flag.png",
        x: 1379,
        y: 474,
        probability: {
            basil: 0.005,
            cabbage: 0.02,
            carrot: 0.08,
            cheese: 0.015,
            coconut: 0.175,
            corn: 0.04,
            cream: 0.09,
            egg: 0.045,
            flour: 0.013,
            ginger: 0.505,
            lemon: 0.2,
            lime: 0.075,
            milk: 0.115,
            mushroom: 0.015,
            mustard: 0.225,
            noodle: 0.0,
            olive: 0.125,
            paprika: 0.09,
            potato: 0.155,
            tomato: 0.435,
            tortilla: 0.005
        },
        worldmapDisplayedIngredients: ['ginger', 'tomato', 'mustard', 'lemon', 'coconut', 'potato'],
        chartBg: "Coral",
    },
    {
        id: "italian",
        img: "public/italy_flag.png",
        x: 1082,
        y: 334,
        probability: {
            basil: 0.21,
            cabbage: 0.005,
            carrot: 0.085,
            cheese: 0.545,
            coconut: 0.0,
            corn: 0.025,
            cream: 0.09,
            egg: 0.145,
            flour: 0.125,
            ginger: 0.0,
            lemon: 0.2,
            lime: 0.01,
            milk: 0.09,
            mushroom: 0.095,
            mustard: 0.015,
            noodle: 0.05,
            olive: 0.435,
            paprika: 0.02,
            potato: 0.035,
            tomato: 0.305,
            tortilla: 0.0
        },
        worldmapDisplayedIngredients: ['cheese', 'olive', 'tomato', 'basil', 'lemon', 'egg'],
        chartBg: "SpringGreen",
    },
    {
        id: "korean",
        img: "public/korea_flag.png",
        x: 1734,
        y: 332,
        probability: {
            basil: 0.0,
            cabbage: 0.115,
            carrot: 0.235,
            cheese: 0.015,
            coconut: 0.01,
            corn: 0.07,
            cream: 0.01,
            egg: 0.195,
            flour: 0.085,
            ginger: 0.39,
            lemon: 0.025,
            lime: 0.01,
            milk: 0.01,
            mushroom: 0.11,
            mustard: 0.015,
            noodle: 0.07,
            olive: 0.055,
            paprika: 0.015,
            potato: 0.045,
            tomato: 0.015,
            tortilla: 0.015
        },
        worldmapDisplayedIngredients: ['ginger', 'carrot', 'egg', 'cabbage', 'mushroom', 'flour'],
        chartBg: "Snow",
    },
    {
        id: "mexican",
        img: "public/mexico_flag.png",
        x: 275,
        y: 470,
        probability: {
            basil: 0.015,
            cabbage: 0.01,
            carrot: 0.035,
            cheese: 0.4,
            coconut: 0.0,
            corn: 0.105,
            cream: 0.245,
            egg: 0.07,
            flour: 0.075,
            ginger: 0.01,
            lemon: 0.03,
            lime: 0.31,
            milk: 0.085,
            mushroom: 0.02,
            mustard: 0.01,
            noodle: 0.01,
            olive: 0.285,
            paprika: 0.075,
            potato: 0.05,
            tomato: 0.27,
            tortilla: 0.385
        },
        worldmapDisplayedIngredients: ['cheese', 'tortilla', 'lime', 'olive', 'tomato', 'cream'],
        chartBg: "OrangeRed",
    },
    {
        id: "moroccan",
        img: "public/morocco_flag.png",
        x: 826,
        y: 430,
        probability: {
            basil: 0.01,
            cabbage: 0.01,
            carrot: 0.23,
            cheese: 0.025,
            coconut: 0.0,
            corn: 0.005,
            cream: 0.005,
            egg: 0.09,
            flour: 0.012,
            ginger: 0.315,
            lemon: 0.41,
            lime: 0.005,
            milk: 0.02,
            mushroom: 0.005,
            mustard: 0.0,
            noodle: 0.0,
            olive: 0.55,
            paprika: 0.275,
            potato: 0.0,
            tomato: 0.34,
            tortilla: 0.0
        },
        worldmapDisplayedIngredients: ['olive', 'lemon', 'ginger', 'tomato', 'paprika', 'carrot'],
        chartBg: "Tomato",
    },
    {
        id: "thai",
        img: "public/thailand_flag.png",
        x: 1607,
        y: 562,
        probability: {
            basil: 0.185,
            carrot: 0.13,
            cabbage: 0.06,
            cheese: 0.01,
            coconut: 0.325,
            corn: 0.08,
            cream: 0.025,
            egg: 0.095,
            flour: 0.02,
            ginger: 0.335,
            lemon: 0.11,
            lime: 0.535,
            milk: 0.095,
            mushroom: 0.085,
            mustard: 0.005,
            noodle: 0.175,
            olive: 0.055,
            paprika: 0.01,
            potato: 0.025,
            tomato: 0.08,
            tortilla: 0.005
        },
        worldmapDisplayedIngredients: ['lime', 'ginger', 'coconut', 'noodle', 'carrot', 'egg'],
        chartBg: "Navy",
    }
]

var ingredients = [
    {
        id: "basil",
        img: "public/ing/basil.png",
        chartBg: "#3cb44b",
    },
    {
        id: "cabbage",
        img: "public/ing/cabbage.png",
        chartBg: "#fabebe",
    },
    {
        id: "carrot",
        img: "public/ing/carrot.png",
        chartBg: "#FF7F50",
    },
    {
        id: "cheese",
        img: "public/ing/cheese.png",
        chartBg: "#aaffc3",
    },
    {
        id: "coconut",
        img: "public/ing/coconut.png",
        chartBg: "#800000",
    },
    {
        id: "corn",
        img: "public/ing/corn.png",
        chartBg: "#FFD700",
    },
    {
        id: "cream",
        img: "public/ing/cream.png",
        chartBg: "#f032e6",
    },
    {
        id: "egg",
        img: "public/ing/egg.png",
        chartBg: "#ffd8b1",
    },
    {
        id: "flour",
        img: "public/ing/flour.png",
        chartBg: "#46f0f0",
    },
    {
        id: "ginger",
        img: "public/ing/ginger.png",
        chartBg: "#f58231",
    },
    {
        id: "milk",
        img: "public/ing/milk.png",
        chartBg: "#0082c8",
    },
    {
        id: "mushroom",
        img: "public/ing/mushroom.png",
        chartBg: "#fffac8",
    },
    {
        id: "mustard",
        img: "public/ing/mustard.png",
        chartBg: "#F0E68C",
    },
    {
        id: "noodle",
        img: "public/ing/noodle.png",
        chartBg: "#e6beff",
    },
    {
        id: "lemon",
        img: "public/ing/lemon.png",
        chartBg: "#FFFF00",
    },
    {
        id: "lime",
        img: "public/ing/lime.png",
        chartBg: "#d2f53c",
    },
    {
        id: "olive",
        img: "public/ing/olive.png",
        chartBg: "#808000",
    },
    {
        id: "paprika",
        img: "public/ing/paprika.png",
        chartBg: "#008080",
    },
    {
        id: "potato",
        img: "public/ing/potato.png",
        chartBg: "#aa6e28",
    },
    {
        id: "tomato",
        img: "public/ing/tomato.png",
        chartBg: "#FF6347",
    },
    {
        id: "tortilla",
        img: "public/ing/tortilla.png",
        chartBg: "#911eb4",
    }
]