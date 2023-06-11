import { create } from "zustand";

export const editingPanelStore = create((set, get) => {
  return {
    modalIsOpen: false,
    setModalIsOpen: (state) => set({ modalIsOpen: state }),
	hoveredSelectableFormationSlot: false,
	setHoveredSelectableFormationSlot: (state) => set({ hoveredSelectableFormationSlot: state})
  };
});
