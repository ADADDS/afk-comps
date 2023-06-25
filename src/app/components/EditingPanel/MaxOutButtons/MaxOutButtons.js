import styles from "./MaxOutButtons.module.css";
import { globalStore } from "@/stores/globalStore";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

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

  const [maxOutHeroLabel, setMaxOutHeroLabel] = useState("");
  const [maxOutCompositionLabel, setMaxOutCompositionLabel] = useState("");

  const [isCompositionMaxedOut, setIsCompositionMaxedOut] = useState(false);

  const isAnySlotFilled = Object.values(slots).some((slot) => slot);
  const filledSlotCount = Object.values(slots).filter((slot) => slot).length;
  const remainingHeroSlots = 5 - filledSlotCount;

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
    setIsCompositionMaxedOut(true);
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

    if (isMaxedOut) {
      setShakeHero(true);
      setTimeout(() => setShakeHero(false), 200);
    }
  };

  const handleMaxOutCompClick = () => {
    if (filledSlotCount === 5) {
      handleMaxOutComposition();
    } else {
      setShakeComposition(true);
      setTimeout(() => setShakeComposition(false), 200);
    }

    if (isCompositionMaxedOut) {
      setShakeComposition(true);
      setTimeout(() => setShakeComposition(false), 200);
    }
  };

  // Generates the button label for the `Max out comp` button
  // bug provavelmente aqui: quando vc maximiza heroi por heroi manualmente inves do max out comp ele n troca o texto
  //quando deleta um heroi tb nao
  useEffect(() => {
    if (filledSlotCount < 5) {
      setMaxOutCompositionLabel(`Select ${remainingHeroSlots} more heroes`);
    } else {
      setMaxOutCompositionLabel("Max out composition");
    }

    if (isCompositionMaxedOut) {
      setMaxOutCompositionLabel("Composition is maxed out");
    }
  }, [selectedSlot, slots]);

  // Generates the button label for the `Max out hero` button
  useEffect(() => {
    if (slots?.[selectedSlot]?.name) {
      if (isMaxedOut) {
        setMaxOutHeroLabel(`${selectedHero.name} is maxed out`);
      } else {
        setMaxOutHeroLabel(`Max out ${slots[selectedSlot].name}`);
      }
    } else {
      setMaxOutHeroLabel("Max out hero");
    }
  }, [selectedSlot, slots]);

  // Checks if the composition is maxed out or not
  useEffect(() => {
    if (slots && Object.keys(slots).length > 0) {
      const compositionMaxedOut = Object.keys(slots).every((slot) => {
        const hero = slots[slot];
        return (
          hero?.stars === 5 &&
          hero?.signatureLevel === 30 &&
          hero?.awakeningLevel === "Ascended" &&
          hero?.furnitureLevel === "27/9" &&
          hero?.engravingLevel === 80
        );
      });

      setIsCompositionMaxedOut(compositionMaxedOut);
    }
  }, [slots]);

  return (
    <div className={styles.maxOutSection}>
      <button
        className={`${styles.maxOutHeroButton} ${
          slots[selectedSlot] ? styles.selectable : styles.disabled
        } ${shakeHero ? styles.shake : ""} ${
          isMaxedOut ? styles.disabled : ""
        }`}
        onClick={handleMaxOutHeroClick}
      >
        {maxOutHeroLabel}
      </button>
      <button
        className={`${styles.maxOutCompButton} ${
          isAnySlotFilled ? styles.selectable : styles.disabled
        } ${shakeComposition ? styles.shake : ""} ${
          isCompositionMaxedOut ? styles.disabled : ""
        } 
        ${remainingHeroSlots > 0 ? styles.disabled : ""}`}
        onClick={handleMaxOutCompClick}
      >
        {maxOutCompositionLabel}
      </button>
    </div>
  );
};

export default MaxOutButtons;
