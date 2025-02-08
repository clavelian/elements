export interface Element {
  atomicNumber: number;
  symbol: string;
  name: string;
  category: string;
}

export const elements: Element[] = [
  { atomicNumber: 1, symbol: "H", name: "Hydrogen", category: "nonmetal" },
  { atomicNumber: 2, symbol: "He", name: "Helium", category: "noble-gas" },
  { atomicNumber: 3, symbol: "Li", name: "Lithium", category: "alkali-metal" },
  {
    atomicNumber: 4,
    symbol: "Be",
    name: "Beryllium",
    category: "alkaline-earth-metal",
  },
  { atomicNumber: 5, symbol: "B", name: "Boron", category: "metalloid" },
  { atomicNumber: 6, symbol: "C", name: "Carbon", category: "nonmetal" },
  { atomicNumber: 7, symbol: "N", name: "Nitrogen", category: "nonmetal" },
  { atomicNumber: 8, symbol: "O", name: "Oxygen", category: "nonmetal" },
  { atomicNumber: 9, symbol: "F", name: "Fluorine", category: "halogen" },
  { atomicNumber: 10, symbol: "Ne", name: "Neon", category: "noble-gas" },
  // Add more elements here...
];
