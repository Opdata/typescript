interface User {
  age: number;
  name: string;
}

// 변수에 User interface를 활용한 예시
const say: User = {
  age: 33,
  name: "Ho",
};

// 함수에 interface를 활용한 예시
function getUser(user: User): void {
  console.log(user);
}

const Test = {
  age: 30,
  name: "Tour",
};

getUser(Test);

// 함수 구조 정의에 interface를 활용한 예시
interface SumFunction {
  (a: number, b: number): number;
}

let Sum: SumFunction;
Sum = function (a: number, b: number): number {
  return a + b;
};

let ArrowSum: SumFunction;
ArrowSum = (a: number, b: number): number => {
  return a + b;
};

// indexing interface
interface Indexing {
  [index: number]: string;
}

const arr: Indexing = ["1", "2", "3"];
arr[0] = "11";

// Dictionary type interface
interface Dictionary {
  [key: string]: RegExp;
}

const obj = {
  file: /\.css$/,
  otherfile: /\.js$/,
};

obj["file"] = /\.js$/;

Object.keys(obj).forEach(() => {
  //
});

// interface Extending
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

const Jun: Developer = {
  name: "Jun",
  age: 22,
  language: "TS",
};
