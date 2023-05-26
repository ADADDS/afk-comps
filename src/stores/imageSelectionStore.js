import { create } from "zustand";

export const imageSelectionStore = create((set, get) => ({
  selectedSlot: undefined,
  slots: {},
  hoveredHero: undefined,
  setSelectedSlot: (slot) => set({ selectedSlot: slot }),
  setHoveredHero: (hero) => {
    set({ hoveredHero: hero });
  },
  clearHoveredHero: () => {
    set({ hoveredHero: undefined });
  },
  setHero: (hero) => {
    const slot = get().selectedSlot;
    if (slot == undefined) return;

    set((state) => ({
      slots: {
        ...state.slots,
        [slot]: hero,
      },
    }));
  },
  removeHero: (hero) => {
    const slots = get().slots;
    let slot;
    for (slot of Object.keys(slots)) {
      if (slots[slot].id == hero.id) {
        delete slots[slot];
        break;
      }
    }
    set({ slots: { ...slots } });
  },
}));
