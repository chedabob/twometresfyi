const conversions = {
    "iPhone XRs" :  "13.253",
    "Old Routemaster buses" : "0.45662",
    "New Routemaster buses": "0.45558",
    "Eiffel Towers (without the tip)": "0.00625",
    "Eiffel Towers (with the tip)": "0.006172839506",
    "Furlongs": "0.009941939076",
    "Big Macs" : "28.632",
    "Bed": "1",
    "Benches": "2",
    "Fridges": "3",
    "Chairs": "4",
    "Sturgeons (the politician)": 1.22,
    "Sturgeons (the fish)" : 10
}

var randomProperty = function (obj) {
    var keys = Object.keys(obj);
    var key = keys[ keys.length * Math.random() << 0]
    var selection = obj[key]
    return { 
        "text": key,
        "value": selection
    };
};

var format = function (selection) {
    return `${parseFloat(selection.value)} ${selection.text}`
}

var rotate = function () {
    let selection = randomProperty(conversions)
    let bigText = document.getElementById("BigText")
    
    bigText.innerText = format(selection)
}

document.addEventListener("DOMContentLoaded",function(){

    rotate()
});

