import { create } from "zustand";

export const globalStore = create((set, get) => {
  return {
    selectedSlot: undefined,
    slots: {},
    hoveredHero: undefined,
    faction: "",
    awakeningLevel: 0,
    engravingLevel: 0,
    signatureLevel: 0,
    furnitureLevel: 0,
    stars: 0,

    setSelectedSlot: (slot) => set({ selectedSlot: slot }),
    setHoveredHero: (hero) => set({ hoveredHero: hero }),
    clearHoveredHero: () => set({ hoveredHero: undefined }),

    setHero: (hero) => {
      const slot = get().selectedSlot;
      if (slot == undefined) return;

      const {
        faction,
        awakeningLevel,
        engravingLevel,
        signatureLevel,
        furnitureLevel,
        stars,
      } = get();

      set((state) => ({
        slots: {
          ...state.slots,
          [slot]: {
            ...hero,
            awakeningLevel,
            engravingLevel,
            signatureLevel,
            furnitureLevel,
            stars,
          },
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

    setAwakeningLevel: (level) => {
      const slot = get().selectedSlot;
      if (slot === undefined) return;

      set((state) => ({
        slots: {
          ...state.slots,
          [slot]: {
            ...state.slots[slot],
            awakeningLevel: level,
          },
        },
      }));
    },

    setEngravingLevel: (level) => {
      const slot = get().selectedSlot;
      if (slot === undefined) return;

      set((state) => ({
        slots: {
          ...state.slots,
          [slot]: {
            ...state.slots[slot],
            engravingLevel: level,
          },
        },
      }));
    },

    setSignatureLevel: (level) => {
      const slot = get().selectedSlot;
      if (slot === undefined) return;

      set((state) => ({
        slots: {
          ...state.slots,
          [slot]: {
            ...state.slots[slot],
            signatureLevel: level,
          },
        },
      }));
    },

    setFurnitureLevel: (level) => {
      const slot = get().selectedSlot;
      if (slot === undefined) return;

      set((state) => ({
        slots: {
          ...state.slots,
          [slot]: {
            ...state.slots[slot],
            furnitureLevel: level,
          },
        },
      }));
    },

    setStars: (stars) => {
      const slot = get().selectedSlot;
      if (slot === undefined) return;
    
      set((state) => ({
        slots: {
          ...state.slots,
          [slot]: {
            ...state.slots[slot],
            stars: stars,
          },
        },
      }));
    },
  };
});


