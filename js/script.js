const conversions = [
    "13.253 iPhone XRs",
    "0.45662 Old Routemaster buses",
    "0.45558 New Routemaster buses",
    "0.00625 Eiffel Towers (without the tip)",
    "0.006172839506 Eiffel Towers (with the tip)",
    "0.009941939076 Furlongs",
    "28.632 Big Macs",
    "1 Bed",
    "2 Benches",
    "3 Fridges",
    "4 Chairs",
    "1.22 Sturgeons (the politician)",
    "10 Sturgeons (the fish)",
    "0.00000000000000000000000022731200731712534% of the observable universe's diameter",
    "13.12336 Greggs sausage rolls",
    "1.17523 Smoots",
    "0.82021 Standard 8ft ISO Shipping containers",
    "0.0126429287 Blackpool towers",
    "6.8728522337 sheets of A4 paper",
		"86 KitKat fingers",
		"6.481x10^-17 parsecs"
]

var randomVal = function (obj) {
    return obj[ obj.length * Math.random() << 0]
};

var rotate = function () {
    let selection = randomVal(conversions)
    let bigText = document.getElementById("BigText")
    
    bigText.innerText = selection
}

document.addEventListener("DOMContentLoaded",function(){

    rotate()
});

