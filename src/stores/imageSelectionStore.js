import { create } from "zustand";

export const imageSelectionStore = create((set, get) => ({
  selectedSlot: undefined,
  slots: {},
  setSelectedSlot: (slot) => set({ selectedSlot: slot }),
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
			console.log(slots);
			break;
		}
    }
	set({ slots: { ...slots } });
  },
}));
