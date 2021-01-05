/* Numeric Enum */
enum Shoes {
  Nike,
  Adidas,
  Newbalance,
}

const myShoe = Shoes.Nike;
console.log(myShoe); // 0

const mySubShoes = Shoes.Adidas;
console.log(mySubShoes); // 1

const myThirdShoes = Shoes.Newbalance;
console.log(myThirdShoes); // 2

/* String Enum */
enum Cap {
  Ball = "BallCap",
  Hood = "HoodCap",
}

const myCap = Cap.Ball;
console.log(myCap); // "BallCap"

const myHood = Cap.Hood;
console.log(Cap.Hood); //"Hood"
