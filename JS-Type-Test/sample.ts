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

console.log(person.name);