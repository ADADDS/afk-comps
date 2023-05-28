import { create } from "zustand";

export const imageSelectionStore = create((set, get) => ({
  selectedSlot: undefined,
  slots: {},
  hoveredHero: undefined,
  setSelectedSlot: (slot) => set({ selectedSlot: slot }),
  setHoveredHero: (hero) => set({ hoveredHero: hero }),
  clearHoveredHero: () => set({ hoveredHero: undefined }),
  setHero: (hero) => {
    const slot = get().selectedSlot;
    if (slot == undefined) return;

    const slots = get().slots;
    const selectedHero = slots[slot];
    if (!selectedHero) return;

    const updatedHero = { ...selectedHero, starCount: hero.starCount };
    set({ slots: { ...slots, [slot]: updatedHero } });
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
