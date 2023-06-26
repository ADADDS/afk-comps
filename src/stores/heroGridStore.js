import { create } from "zustand";
import Data from "src/app/assets/Data/Data.json";

const FACTION_OPTIONS = [
  { id: 0, faction: "Celestial" },
  { id: 1, faction: "Dimensional" },
  { id: 2, faction: "Graveborn" },
  { id: 3, faction: "Hypogean" },
  { id: 4, faction: "Lightbearer" },
  { id: 5, faction: "Mauler" },
  { id: 6, faction: "Wilder" },
];

const allFactions = FACTION_OPTIONS.map((option) => option.faction);

export const heroGridStore = create((set) => ({
  selectedFaction: allFactions,
  setSelectedFaction: (selectedFaction) => {
    set((state) => ({ selectedFaction }));
  },
  
  heros: Data.Heroes,
  searchQuery: "",
  filteredHeroes: Data.Heroes,
  setSearchQuery: (query) =>
    set({
      searchQuery: query,
      filteredHeroes: Data.Heroes.filter((hero) =>
        hero.name.toLowerCase().includes(query.toLowerCase())
      ),
    }),
}));
