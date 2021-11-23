export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person('dera');
console.log(me.name);

const meOsaka = new Japanese.Osaka.Person('derayan');
console.log(meOsaka.name);

const micheael = new English.Person('dera', 'aaa', 'toru');
console.log(micheael);
