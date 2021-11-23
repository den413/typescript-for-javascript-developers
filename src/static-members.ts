export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'toru';
  static lastName: string = 'onodera';

  static work() {
    // return 'hey guys';
    return `hey guys ${this.firstName}`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());
