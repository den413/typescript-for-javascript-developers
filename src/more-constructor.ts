export {};

class Person {
  constructor(public name: string, protected age: number) {}
}

const me = new Person('dera', 31);
console.log(me);
