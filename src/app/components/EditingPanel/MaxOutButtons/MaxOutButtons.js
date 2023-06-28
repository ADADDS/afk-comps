import styles from "./MaxOutButtons.module.css";
import { globalStore } from "@/stores/globalStore";
import React, { useState, useEffect } from "react";

const MAX_SLOTS = 5;

const MaxOutButtons = () => {
  const {
    slots,
    selectedSlot,
    setStars,
    setSignatureLevel,
    setAwakeningLevel,
    setFurnitureLevel,
    setEngravingLevel,
  } = globalStore();

  const [isMaxOutHeroButtonShaking, setIsMaxOutHeroButtonShaking] =
    useState(false);
  const [
    isMaxOutCompositionButtonShaking,
    setIsMaxOutCompositionButtonShaking,
  ] = useState(false);

  const [maxOutHeroButtonLabel, setMaxOutHeroButtonLabel] = useState("");
  const [maxOutCompositionButtonLabel, setMaxOutCompositionButtonLabel] =
    useState("");

  const isAnyHeroSelected = Object.values(slots).some((slot) => slot);
  const numberOfFilledSlots = Object.values(slots).filter(
    (slot) => slot
  ).length;
  const numberOfEmptySlots = MAX_SLOTS - numberOfFilledSlots;

  const selectedHero = slots?.[selectedSlot];

  const isMaxedOut =
    selectedHero?.stars === 5 &&
    selectedHero?.signatureLevel === 30 &&
    selectedHero?.awakeningLevel === "Ascended" &&
    selectedHero?.furnitureLevel === "27/9" &&
    selectedHero?.engravingLevel === 80;

  const handleMaxOutHero = () => {
    const { selectedSlot, slots } = globalStore.getState();
    if (!slots[selectedSlot]) return;

    setStars(5, selectedSlot);
    setSignatureLevel(30, selectedSlot);
    setAwakeningLevel("Ascended", selectedSlot);
    setFurnitureLevel("27/9", selectedSlot);
    setEngravingLevel(80, selectedSlot);
  };

  const handleMaxOutComposition = () => {
    Object.keys(slots).forEach((slot) => {
      setStars(5, slot);
      setSignatureLevel(30, slot);
      setAwakeningLevel("Ascended", slot);
      setFurnitureLevel("27/9", slot);
      setEngravingLevel(80, slot);
    });
  };

  const handleMaxOutHeroClick = () => {
    if (!slots[selectedSlot]) {
      setIsMaxOutHeroButtonShaking(true);
      setTimeout(() => setIsMaxOutHeroButtonShaking(false), 200);
    } else {
      handleMaxOutHero();
    }

    if (isMaxedOut) {
      setIsMaxOutHeroButtonShaking(true);
      setTimeout(() => setIsMaxOutHeroButtonShaking(false), 200);
    }
  };

  const handleCompositionButtonClick = () => {
    if (numberOfFilledSlots === MAX_SLOTS) {
      if (!isCompositionMaxedOut()) {
        handleMaxOutComposition();
      } else {
        setIsMaxOutCompositionButtonShaking(true);
        setTimeout(() => setIsMaxOutCompositionButtonShaking(false), 200);
      }
    } else {
      setIsMaxOutCompositionButtonShaking(true);
      setTimeout(() => setIsMaxOutCompositionButtonShaking(false), 200);
    }
  };

  const isCompositionMaxedOut = () => {
    return Object.keys(slots).every((slot) => {
      const hero = slots[slot];
      return (
        hero?.stars === 5 &&
        hero?.signatureLevel === 30 &&
        hero?.awakeningLevel === "Ascended" &&
        hero?.furnitureLevel === "27/9" &&
        hero?.engravingLevel === 80
      );
    });
  };

  // Generates the button label for the `Max out comp` button
  useEffect(() => {
    if (numberOfFilledSlots < MAX_SLOTS) {
      if (numberOfFilledSlots === 4) {
        setMaxOutCompositionButtonLabel(
          `Select ${numberOfEmptySlots} more hero`
        );
      } else {
        setMaxOutCompositionButtonLabel(
          `Select ${numberOfEmptySlots} more heroes`
        );
      }
    } else if (isCompositionMaxedOut()) {
      setMaxOutCompositionButtonLabel("Composition is maxed out");
    } else {
      setMaxOutCompositionButtonLabel("Max out composition");
    }
  }, [selectedSlot, slots, numberOfFilledSlots]);

  // Generates the button label for the `Max out hero` button
  useEffect(() => {
    if (slots?.[selectedSlot]?.name) {
      if (isMaxedOut) {
        setMaxOutHeroButtonLabel(`${selectedHero.name} is maxed out`);
      } else {
        setMaxOutHeroButtonLabel(`Max out ${slots[selectedSlot].name}`);
      }
    } else {
      setMaxOutHeroButtonLabel("Max out hero");
    }
  }, [selectedSlot, slots]);

  return (
    <div className={styles.maxOutSection}>
      <button
        className={`${styles.maxOutHeroButton} ${
          slots[selectedSlot] ? styles.selectable : styles.disabled
        } ${isMaxOutHeroButtonShaking ? styles.shake : ""} ${
          isMaxedOut ? styles.disabled : ""
        }`}
        onClick={handleMaxOutHeroClick}
      >
        {maxOutHeroButtonLabel}
      </button>
      <button
        className={`${styles.maxOutCompButton} ${
          isAnyHeroSelected ? styles.selectable : styles.disabled
        } ${isMaxOutCompositionButtonShaking ? styles.shake : ""} ${
          isCompositionMaxedOut() ? styles.disabled : ""
        } 
        ${numberOfEmptySlots > 0 ? styles.disabled : ""}`}
        onClick={handleCompositionButtonClick}
      >
        {maxOutCompositionButtonLabel}
      </button>
    </div>
  );
};

export default MaxOutButtons;