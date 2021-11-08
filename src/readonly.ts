export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('dera');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'toru';
