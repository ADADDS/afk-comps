import { create } from "zustand";
import Data from "src/app/assets/Data/Data.json";

export const heroGridStore = create((set) => ({
  heros: Data.Heroes,
  searchQuery: "",
  filteredHeroes: Data.Heroes,
  setSearchQuery: (query) =>
    set({
      searchQuery: query,
      filteredHeroes: (Data.Heroes).filter((hero) =>
        hero.name.toLowerCase().includes(query.toLowerCase())
      ),
    }),
}));
