// import { create } from "zustand";
// import { imageSelectionStore } from "@/stores/ImageSelectionStore";

// export const heroOrnaments = create((set, get) => {
//   const slots = imageSelectionStore.getState().slots;
//   const selectedSlot = imageSelectionStore.getState().selectedSlot;

//   return {
//     awakeningLevel: 0,
//     engravingLevel: 0,
//     signatureLevel: 0,
//     furnitureLevel: 0,
//     faction: "",
//     stars: 4,

//     setAwakeningLevel: (level) => set({ awakeningLevel: level }),
//     setEngravingLevel: (level) => set({ engravingLevel: level }),
//     setSignatureLevel: (level) => set({ signatureLevel: level }),
//     setFurnitureLevel: (level) => set({ furnitureLevel: level }),
//     setStars: (stars) => {
//       const slot = selectedSlot; // Access selectedSlot from imageSelectionStore
//       if (slot === undefined) return;

//       const currentSlots = slots; // Access slots from imageSelectionStore

//       imageSelectionStore.setState((state) => ({
//         // Update state in imageSelectionStore
//         slots: {
//           ...currentSlots,
//           [slot]: {
//             ...currentSlots[slot],
//             stars: stars,
//           },
//         },
//       }));
//     },
//   };
// });
