export {};

type Pich1 = {
  speed: number;
};

type Batter1 = {
  ave: number;
};

const sasaki: Pich1 = {
  speed: 154,
};

const hiromitsu: Batter1 = {
  ave: 0.367,
};

// type player = {
//   speed: number;
//   ave: number;
// };

type player = Pich1 & Batter1;

const shohei: player = {
  speed: 165,
  ave: 0.286,
};
