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
