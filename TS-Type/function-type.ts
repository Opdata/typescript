//TS 함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number) {
  return a + b;
}

sum(10, 20);

// TS 함수의 반환값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// TS 함수의 파라미터와 반환값에 타입을 정의한 방식
function sum2(a: number, b: number): number {
  return a + b;
}

// TS
function sum3(a: number, b?: number): number {
  return a + b;
}

sum(10, 20); // 30
sum3(10); // 10

// TS default Parameter
function sum4(a: number, b = 100): number {
  return a + b;
}

sum4(10); // 110

// TS Rest Syntax Test
function sum5(a: number, ...nums: number[]): number {
  let totalNums: number = 0;

  for (let key in nums) {
    totalNums += nums[key];
  }

  return a + totalNums;
}

// The parameters 'x' and 'y' have the type number
let myAdd = function (x: number, y: number): number {
  return x + y;
};

// myAdd has the full function type
let myAdd2: (baseValue: number, increment: number) => number = function (x, y) {
  return x + y;
};
