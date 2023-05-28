import { create } from "zustand";

export const heroOrnaments = create((set, get) => ({
  selectedSlot: undefined,
  slots: {},
  awakeningLevel: 0,
  engravingLevel: 0,
  signatureLevel: 0,
  furnitureLevel: 0,
  faction: "",

  setSelectedSlot: (slot) => set({ selectedSlot: slot }),
  setAwakeningLevel: (level) => set({ awakeningLevel: level }),
  setEngravingLevel: (level) => set({ engravingLevel: level }),
  setSignatureLevel: (level) => set({ signatureLevel: level }),
  setFurnitureLevel: (level) => set({ furnitureLevel: level }),
  setStarCount: (count) => {
    const selectedSlot = get().selectedSlot;
    const slots = get().slots;
    const selectedHero = slots[selectedSlot];
    if (!selectedHero) return;
    selectedHero.starCount = count;
    set({
      slots: {
        ...slots,
        [selectedSlot]: selectedHero,
      },
    });
  },
  setFaction: (faction) => set({ faction: faction }),
}));
