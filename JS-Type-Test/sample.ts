function Add(a: number, b: number): number {
  return a + b;
}

Add(10, 20);


// Object Types = 1. 아래와 같은 바로 정의, 2. Interface, 3. Type
const person: {
  name: string;
  age: number;
} = {
  name: 'Jun',
  age: 30
}

// Tuple Types => 정확히 두 요소가 있는 특수배열
const person2: {
  name: string;
  age: number;
  hobby: string[];
  role: [number, string];
} = {
  name: 'hi',
  age: 29,
  hobby: ['Sports','Cooking'],
  role:[2, 'author'], // 위의 타입와 똑같은 순서로 값을 넣어야 한다.
}

enum NumberRole { // 처음 값에 5을 넣으면 5부터 시작하여 증가값이 자동으로 들어간다, 넣지 않으면 0부터 시작
  ADMIN = 5,
  AUTHOR,
  MIN,
}

enum StringRole { // 문자열 그대로 입력가능, 문자열을 안넣어준다면 숫자가 들어간다.
  CALL = "CALL",
  HEIGHT = "HEIGHT",
  WIDTH = "WIDTH",
}

console.log(person.name);