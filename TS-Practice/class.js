function Person(name, age) {
  this.name = name;
  this.age = age;
}

const Ho = new Person("Ho", 29);

console.log(Ho);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const Jun = new Person("Jun", 22);

console.log(Jun);
