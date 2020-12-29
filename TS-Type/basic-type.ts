// JS 문자열 선언
// const str = "hello";

// TS 문자열 선언
const str: string = "hello";

// TS 숫자 선언
let num: number = 123;

// TS 숫자형 배열 선언
const arr: Array<number> = [1, 2, 3];
const hero: Array<string> = ["Cap", "Hi"];
const item: number[] = [1, 2, 3];

// TS 문자열 배열 선언
const arr2: Array<string> = ["hello", "hi"];

// TS 튜플
const tuple: [string, number] = ["Hi", 112233];

// TS 객체
const obj: object = {};

const obj1: object = {
  name: "Jun",
  age: 100,
};

const obj2: { name: string; age: number } = {
  name: "Jun",
  age: 100,
};

// TS 진위
const check: boolean = true;

// TS enum
enum Avenger {
  Capt = 1, // 인덱스를 1부터 시작하게 변경, 즉 Avenger[1] == Capt
  Hi, // Avenger[2] == Hi
  Hello, // Avenger[3] == Hello
}

enum Test {
  Red = 1,
  Green = 2,
  Blue = 4,
}

const hero1: Avenger = Avenger.Hi;
const hero2: string = Avenger[1];
const hero3: Test = Test.Blue;
const hero4: string = Test[2];

// TS any
const hi: any = "hi";
const type: any = "hihi";
const other: any = ["hello~", 123, true];

// TS void
const others: void = undefined;
const others1: void = null;
function others2(): void {
  console.log("function void type");
}

// TS Never
function use(): never {
  while (true) {
    //
  }
}
