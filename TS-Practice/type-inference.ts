// Type inference Example 1 (variable, function parameter)

let a; // any
let b = 10; // number
let c = "string"; // string

function getb(b = 10) {
  //parameter type number , return type number
  return b;
}

// Type inference Example 2 (interface, generic)

interface Drop<T> {
  value: T;
  title: string;
}

const item: Drop<string> = {
  value: "abc",
  title: "hello",
};

// Type inference Example 3

interface Dropdown<T> {
  value: T;
  title: string;
}

interface DetailDropDown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}

const detailItem: DetailDropDown<string> = {
  title: "abc",
  description: "ab",
  value: "hello",
  tag: "inference",
};

// Best Common Type

let arr = [0, 1, null]; // number, null로 구성, Best Common Type 알고리즘으로 다른 타입들과 가장 잘 호환되는 타입을 선정
