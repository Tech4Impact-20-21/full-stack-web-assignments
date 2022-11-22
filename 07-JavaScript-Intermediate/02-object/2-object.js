// Question - 01
// - Change 'name' in 'person' to your name
// - Change 'favDrinks' in 'temulawak' to 'tap water'
// - Change 'greeting' to function:
//   - Have 1 parameter: name [string] => person that will be greet
//   - Return value : "Hello, $NAME"

const person = {
    name: "person A",
    age: 100,
    favDrinks: [
      "coffee",
      "jamu temulawak",
      "tea"
    ],
    greeting: function() {
      console.log("hello world")
    }
  }
  
person.name = "Aurellia";
person.favDrinks[1] = "tap water";
person.greeting = function(name){
    console.log(`Hello, ${name}`)
}

console.log(person.name);
console.log(person.age);
console.log(person.favDrinks);
console.log(person.greeting("John Watson"));
  
// Question - 02
// Create a function to return a value based on an object's structure:
// Have 2 parameters:
// - obj [object] => target object
// - path [string] => position of the desired value
// Return value:
// - If we can't find the desired value, return null
// - If we find it, return the value

function getObjectValue( obj, path ) {
    let splitPath = path.split('.');
    let result = obj;
    for(let i = 0; i < splitPath.length; i++){
        if(Object.keys(result).includes(splitPath[i])){
            result = result[splitPath[i]];
        } else {
            result = null;
            break;
        }
    }        
    return result;
}

const milkBasedCoffee = {
  name: "latte",
  ingredients: {
    espresso: {
      origin: "lampung",
      roastProfile: "medium to dark",
      ratio: 1
    },
    milk: {
      brand: "susu murni",
      isVegan: false,
      ratio: 5
    }
  },
}

const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

console.log(espresso);
console.log(coffeeBrand);
console.log(isMilkVegan);

// Question - 03
// Create  a function to calculate profit for each bitcoin:
// Steps:
// - Calculate profit for each bitcoin using sell-buy
// - Repeat the first step for all the transaction history
// - Sum all the profits for each coin
// - Save the profits in an object
// - You must use built-in method reduce

// Transaction History
const items = [
    {
      btc: { buy: 10, sell: 9 },
      eth: { buy: 8, sell: 7.5 },
      doge: { buy: 7, sell: 6.5 },
      day: 1,
    },
    {
      btc: { buy: 9, sell: 5 },
      eth: { buy: 7, sell: 4 },
      doge: { buy: 6, sell: 3 },
      day: 2,
    },
    {
      btc: { buy: 5, sell: 10 },
      eth: { buy: 4, sell: 6 },
      doge: { buy: 3, sell: 4 },
      day: 3,
    },
  ];

// Create the function
function calculateIncome(items){
    // Save all the coins
    let coins = [];
    for(let i = 0; i < (Object.keys(items[0]).length-1); i++){
        coins.push(Object.keys(items[0])[i]);
    }

    // Initiate result
    let result = {};
    coins.forEach(function(coin){
        result[coin] = []
    });
    for(let i = 0; i < Object.keys(result).length; i++){
        result[Object.keys(result)[i]][0] = []; // To save buy
        result[Object.keys(result)[i]][1] = []; // To save sale
    }

    // Save buy and sale
    items.forEach(function(item){
        for(let i = 0; i < (Object.keys(item).length-1); i++){
            result[Object.keys(item)[i]][0].push(item[Object.keys(item)[i]].buy);
            result[Object.keys(item)[i]][1].push(item[Object.keys(item)[i]].sell);
        }
    })

    // Calculate profit
    for(let i=0; i < Object.keys(result).length; i++){
        // Sum all buy
        let buy = result[Object.keys(result)[i]][0].reduce(function(previousValue, currentValue){
            return previousValue + currentValue;
        });

        // Sum all sell
        let sell = result[Object.keys(result)[i]][1].reduce(function(previousValue, currentValue){
            return previousValue + currentValue;
        });

        // Save the result
        result[Object.keys(result)[i]][0] = buy;
        result[Object.keys(result)[i]][1] = sell;


        // Calculate profit
        let profit = result[Object.keys(result)[i]].reduce(function(previousValue, currentValue){
            return -previousValue + currentValue;
        });

        // Save the result
        result[Object.keys(result)[i]] = profit;
    }

    // Order result
    let finalResult = {};
    let orderKeys = Object.keys(result).sort();
    for(let i=0; i < orderKeys.length; i++){
        finalResult[orderKeys[i]] = result[orderKeys[i]]
    }
    return finalResult;
}
  
console.log(calculateIncome(items));
  