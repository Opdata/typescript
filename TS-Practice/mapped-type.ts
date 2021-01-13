type material = "water" | "bottle" | "source";
type materialSince = { [K in material]: number };
const types: materialSince = {
  water: 1993,
  bottle: 1000,
  source: 1992,
};
