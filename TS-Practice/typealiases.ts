// 일반적인 string 타입 사용
const PersonName: string = "Ho";

// 타입 별칭 사용
type Name = string;
const Honame: Name = "Ho";

type Dev = {
  name: string;
  age: number;
};

// object 타입 별칭 사용
type Obj = {
  id: number;
  title: string;
  address: string;
};

function Info(arg: Obj) {
  //
}

// 인터페이스 타입 별칭(interface type aliases)
const DevJun: Dev = {
  name: "Jun",
  age: 22,
};

// generic type aliases

type User<T> = {
  name: T;
};

// 인터페이스와 타입별칭
interface Person {
  name: string;
  hobby: string;
}

type newPerson = {
  name: string;
  hobby: string;
};

const seho: newPerson = {
  name: "seho",
  hobby: "game",
};
