import styles from "./MaxOutButtons.module.css";
import { globalStore } from "@/stores/globalStore";
import { motion } from "framer-motion";
import React, { useState } from "react";

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

  const [shakeHero, setShakeHero] = useState(false);
  const [shakeComposition, setShakeComposition] = useState(false);

  const isAnySlotFilled = Object.values(slots).some((slot) => slot);

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
      setShakeHero(true);
      setTimeout(() => setShakeHero(false), 200);
    } else {
      handleMaxOutHero();
    }
  };

  const handleMaxOutCompClick = () => {
    if (!isAnySlotFilled) {
      setShakeComposition(true);
      setTimeout(() => setShakeComposition(false), 200);
    } else {
      handleMaxOutComposition();
    }
  };

  return (
    <div className={styles.maxOutSection}>
      <button
        className={`${styles.maxOutHeroButton} ${
          slots[selectedSlot] ? styles.selectable : styles.disabled
        } ${shakeHero ? styles.shake : ""}`}
        onClick={handleMaxOutHeroClick}
      >
        Max out hero
      </button>
      <button
        className={`${styles.maxOutCompButton} ${
          isAnySlotFilled ? styles.selectable : styles.disabled
        } ${shakeComposition ? styles.shake : ""}`}
        onClick={handleMaxOutCompClick}
      >
        Max out composition
      </button>
    </div>
  );
};

export default MaxOutButtons;
