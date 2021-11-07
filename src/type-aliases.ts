export {};

type Mojoiretu = string;

const fooString: string = 'Hello';
const fooMojoiretu: Mojoiretu = 'Hello';

const exaple1 = { name: 'dera', age: 31 };

type Profile = {
  name: string;
  age: number;
};

const exaple2: Profile = { name: 'dera', age: 31 };

type Profile2 = typeof exaple1;
