/* Union Type */
// function logMessage(value: string) {
//  console.log(value);
// }

// logMessage("Hello"); /* Pass */
// logMessage(100); /* Error */

let Peerson: string | number | boolean;

function logMessage(value: string | number) {
  // Union Type
  console.log(value);
  if (typeof value === "number") {
    // Union Type 에서 Type 분류
    console.log(value);
    value.toLocaleString();
  }

  if (typeof value === "string") {
    // Union Type 에서 Type 분류
    console.log(value);
    value.toString();
  }
  throw new TypeError("value must be string or number");
}

logMessage("Hello");
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  someone.name; /* pass */
  //   someone.skill; /* Error */
  //   someone.age; /* Error */
}

askSomeone({ name: "Develop", skill: "Web" });
askSomeone({ name: "Hoooo", age: 22 });

/* Intersection Type */
let Pee: string | number | boolean;
let Peer: string & number & boolean; /* string & numeber & boolean */

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function newaskSomeone(someone: Developer & Person) {
  someone.name; /* pass */
  someone.skill; /* pass */
  someone.age; /* pass */
}

newaskSomeone({ name: "DoDo", skill: "JavaScript", age: 27 });
newaskSomeone({ name: "Ny", skill: "TS", age: 22 });
