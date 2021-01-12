interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
}

let x: Developer;
let y: Person;

x = y; // Error
y = x; // OK
