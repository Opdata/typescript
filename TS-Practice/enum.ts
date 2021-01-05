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

/* Enum Example */
enum Answer {
  Yes = "Y",
  No = "N",
}

function Question(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log("pass");
  }
  if (answer === Answer.No) {
    console.log("fail");
  }
}

Question(Answer.Yes); // Answer Enum 의 값을 전달하기 때문에
// Question("Yes"); // Error
// Question("N"); // Error
// Question("NO"); // Error
