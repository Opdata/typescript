/* interface type compatibility */
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

/* function type compatibility */

let add = function (a: number) {
  // 내부 로직은 중요하지 않다.
};

let sum = function (a: number, b: number) {
  // 구조적으로 add 보다 더 크다.
};

add = sum; // Error
sum = add; // OK

/* generic type compatibility */
interface empty<T> {
  //
}

let empty1: empty<string>;
let empty2: empty<number>;

empty1 = empty2; // OK
empty2 = empty1; // OK

interface noempty<T> {
  data: T;
}

let noempty1: noempty<string>;
let noempty2: noempty<number>;

noempty1 = noempty2; // Error
noempty2 = noempty1; // Error
