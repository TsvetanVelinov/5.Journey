function journey (input){

let budget = Number (input[0]);
let season = input [1];
let price = 0;

let destination = '';
let placeType = '';

if ( budget <= 100){
    destination = "Bulgaria";
} else if ( budget <= 1000){
    destination = "Balkans";
} else {
    destination = "Europe";
}

if (season === "summer"){
    placeType = "Camp" ;
} else if(season === "winter"){
    placeType = "Hotel";
}

if (season === "summer" && destination === "Bulgaria"){
    price = 0.30 * budget
} else if(season === "winter" && destination === "Bulgaria"){
    price = budget * 0.7;   
} 
if (season === "summer" && destination === "Balkans"){
    price = budget * 0.4; 
} else if(season === "winter" && destination === "Balkans"){
    price = budget * 0.8;
} 
if (destination === "Europe"){
    placeType = "Hotel";
    price = budget * 0.9;
}

console.log(`Somewhere in ${destination}`);
console.log(`${placeType} - ${price.toFixed(2)}`);

}







journey (["50", "summer"])

journey (["75", "winter"])

journey (["312", "summer"])

journey(["678.53", "winter"])

journey (["1500", "summer"])

