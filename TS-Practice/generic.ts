function print<T>(text: T): T {
  console.log(text);
  return text;
}

print<string>("Hello");

function ExamplePrint<T>(text: T): T {
  console.log(text);
  return text;
}

ExamplePrint<string>("aaaaabbbbbbcccc"); // String
ExamplePrint<number>(100); // Number

/* Interface Generic */
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

// const DropdownObj: Dropdown = { value: 10, selected: true }; // 10 이 number 라서 Dropdown Interface의 string 타입인 value 에 오류발생

interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const GenericInterfaceObj: Dropdown<string> = { value: "hi", selected: false };

/* Generic Constraints */

function logTextLength<T>(text: T[]): T[] {
  // text의 타입을 배열로 제한
  console.log(text.length); // text의 타입을 배열로 제한해주어서 .length 사용 가능
  return text;
}

logTextLength<string>(["hi"]);

/* Generic Constraints2 */

interface lengthType {
  length: number;
}

function TextLength<T extends lengthType>(text: T): T {
  // 문자열로 호출 및 해당 .length의 타입은 lengthType interface 에 의해
  // legnth 의 타입은 number로 제한
  text.length;
  return text;
}

TextLength("A");
TextLength({ length: 10 });

/* Generic Constraints keyof */

interface newShoes {
  name: string;
  size: number;
  brand: string;
}

function getShoes<T extends keyof newShoes>(item: T): T {
  // keyof 예약어를 통한 제한
  // newShoes interface의 키만 들어갈 수 있게 타입을 제한
  return item;
}

getShoes("name");
getShoes("brand");
