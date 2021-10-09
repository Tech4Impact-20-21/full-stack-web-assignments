// 2 Parameter
// - obj Object => object yang akan kita ambil value-nya
// - path String => letak dari nilai yang ingin kita ambil
// return value
// - apabila kita tidak dapat menemukan field yang dituju, maka kita akan mengembalikan null
// - apabila kita menemukan menemukan field yang dituju maka kita akan mengembalikan value dari field tersebut

function getObjectValue(obj, path) {
  path = path.split(".");
  let curr = obj;

  for (let i = 0; i < path.length; i++) {
      const activeObj = curr[path[i]];
      curr = activeObj;
  }
  
  if(curr === undefined){
      return null;
  }
  
  return curr;
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