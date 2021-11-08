export {};

class MyNumberCard {
  private _owner: string;
  private _sercretNumber: number;

  constructor(owner: string, sercretNumber: number) {
    this._owner = owner;
    this._sercretNumber = sercretNumber;
  }

  get owner() {
    return this._owner;
  }

  set sercretNumber(sercretNumber: number) {
    this._sercretNumber = sercretNumber;
  }

  debugPrint() {
    return `sercretNumber: ${this._sercretNumber}`;
  }
}

let card = new MyNumberCard('dera', 1111);
console.log(card.debugPrint());
card.sercretNumber = 2222;
console.log(card.debugPrint());

// card.owner = 'toru';
console.log(card.owner);
// card.sercretNumber;
// card._sercretNumber;
console.log(card.sercretNumber);
