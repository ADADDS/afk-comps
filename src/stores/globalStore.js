import { create } from "zustand";
import LZString from "lz-string";

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

    serializeState: () => {
      const stateToSerialize = {
        f: get().faction,
        a: get().awakeningLevel,
        e: get().engravingLevel,
        s: get().signatureLevel,
        fu: get().furnitureLevel,
        st: get().stars,
        sl: get().slots,
      };

      const stringifiedState = JSON.stringify(stateToSerialize);
      const compressedState =
        LZString.compressToEncodedURIComponent(stringifiedState);

      return compressedState;
    },

    deserializeState: (compressedState) => {
      const stringifiedState =
        LZString.decompressFromEncodedURIComponent(compressedState);
      const state = JSON.parse(stringifiedState);

      const deserializedState = {
        faction: state.f,
        awakeningLevel: state.a,
        engravingLevel: state.e,
        signatureLevel: state.s,
        furnitureLevel: state.fu,
        stars: state.st,
        slots: state.sl,
      };

      set(deserializedState);
    },

    setSelectedSlot: (slot) => set({ selectedSlot: slot }),
    setHoveredHero: (hero) => set({ hoveredHero: hero }),
    clearHoveredHero: () => set({ hoveredHero: undefined }),

    getNextSlot: () => {
      const slots = get().slots;
      let nextSlot = (get().selectedSlot % 5) + 1;

      let count = 0;
      while (slots[nextSlot] && count < 5) {
        nextSlot = (nextSlot % 5) + 1;
        count++;
      }
      if (count === 5) {
        return undefined;
      }

      return nextSlot;
    },

    setHero: (hero) => {
      const slot = get().selectedSlot;
      if (slot === undefined) return;

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
        selectedSlot: get().getNextSlot(),
      }));
    },

    removeHero: (hero) => {
      const slots = get().slots;
      let slot;
      for (slot of Object.keys(slots)) {
        if (slots[slot] && slots[slot].id == hero.id) {
          delete slots[slot];
          break;
        }
      }
      set({ slots: { ...slots } });
    },

    setEngravingLevel: (level, slot) => {
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

    setFurnitureLevel: (level, slot) => {
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

    setAwakeningLevel: (level, slot) => {
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
    setSignatureLevel: (level, slot) => {
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
    setStars: (stars, slot) => {
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

    swapHero: (hero, slot) => {
      const slots = get().slots;
      let existingSlotKey;
      for (const [key, val] of Object.entries(slots)) {
        if (val?.id === hero.id) {
          existingSlotKey = key;
          break;
        }
      }
      if (existingSlotKey) {
        const temp = slots[existingSlotKey];
        slots[existingSlotKey] = slots[slot];
        slots[slot] = temp;
      }
      set({ slots: { ...slots } });
    },
  };
});
