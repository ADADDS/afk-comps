import React, { useEffect, useState } from "react";
import styles from "./HeroOrnaments.module.css";

const HeroOrnaments = ({ hero }) => {
  const [starAmount, setStarAmount] = useState([]);
  const [signatureLevelStage, setSignatureLevelStage] = useState(undefined);
  const [awakeningLevelStage, setAwakeningLevelStage] = useState(undefined);
  const [furnitureLevelStage, setFurnitureLevelStage] = useState(undefined);
  const [engravingLevel, setEngravingLevel] = useState(0);

  useEffect(() => {
    const engravingLevel = hero?.engravingLevel;
    console.log("engravingLevel do HeroOrnaments", engravingLevel);

    if (engravingLevel === 0 || engravingLevel === undefined) {
      setEngravingLevel("Stage0");
    } else if (engravingLevel === 30) {
      setEngravingLevel("Stage1");
    } else if (engravingLevel === 60) {
      setEngravingLevel("Stage2");
    } else if (engravingLevel === 80) {
      setEngravingLevel("Stage3");
    }
  }, [hero]);

  useEffect(() => {
    const newStarAmount = [];
    if (awakeningLevelStage !== "Ascended") {
      setStarAmount(0);
    } else {
      for (let i = 0; i < (hero?.stars || 0); i++) {
        newStarAmount.push(
          <img
            key={i}
            className={styles.star}
            src={`/Images/Stars/${engravingLevel}.png`}
            alt={`star${i}`}
          />
        );
      }
    }
    setStarAmount(newStarAmount);
  }, [hero, engravingLevel, awakeningLevelStage]);

  useEffect(() => {
    const signatureLevel = hero?.signatureLevel;

    if (signatureLevel === 0 || signatureLevel === undefined) {
      setSignatureLevelStage(undefined);
    } else if (signatureLevel === 1) {
      setSignatureLevelStage("Stage1");
    } else if (signatureLevel === 10) {
      setSignatureLevelStage("Stage2");
    } else if (signatureLevel === 20) {
      setSignatureLevelStage("Stage3");
    } else if (signatureLevel === 30) {
      setSignatureLevelStage("Stage4");
    }
  }, [hero]);

  useEffect(() => {
    const furnitureLevel = hero?.furnitureLevel;

    if (furnitureLevel === "0/9" || furnitureLevel === undefined) {
      setFurnitureLevelStage(undefined);
    } else if (furnitureLevel === "3/9") {
      setFurnitureLevelStage("Stage1");
    } else if (furnitureLevel === "9/9") {
      setFurnitureLevelStage("Stage2");
    } else if (furnitureLevel === "27/9") {
      setFurnitureLevelStage("Stage3");
    }
  }, [hero]);

  useEffect(() => {
    const awakeningLevel = hero?.awakeningLevel;

    if (awakeningLevel === undefined) {
      setAwakeningLevelStage(undefined);
    } else if (awakeningLevel === "Elite") {
      setAwakeningLevelStage("Elite");
    } else if (awakeningLevel === "ElitePlus") {
      setAwakeningLevelStage("ElitePlus");
    } else if (awakeningLevel === "Legendary") {
      setAwakeningLevelStage("Legendary");
    } else if (awakeningLevel === "LegendaryPlus") {
      setAwakeningLevelStage("LegendaryPlus");
    } else if (awakeningLevel === "Mythic") {
      setAwakeningLevelStage("Mythic");
    } else if (awakeningLevel === "MythicPlus") {
      setAwakeningLevelStage("MythicPlus");
    } else if (awakeningLevel === "Ascended") {
      setAwakeningLevelStage("Ascended");
    }
  }, [hero]);

  return (
    <div className={styles.container}>
      {/* FURNITURE SECTION */}
      <div className={styles.furnitureContainer}>
        {hero?.furnitureLevel ? (
          <img
            className={styles.furniture}
            src={`/Images/Furniture/${furnitureLevelStage}.png`}
            alt={hero.furnitureLevel}
          />
        ) : null}
      </div>

      {/* SIGNATURE SECTION */}
      <div className={styles.signatureContainer}>
        {signatureLevelStage ? (
          <img
            className={styles.signature}
            src={`/Images/SignatureTag/${signatureLevelStage}.png`}
            alt={hero.signatureLevel}
          />
        ) : null}
      </div>

      {/* FACTION SECTION */}
      <div className={styles.factionContainer}>
        {hero?.faction ? (
          <img
            className={styles.factionBadge}
            src={`/Images/Faction/${hero.faction}.png`}
            alt={hero.faction}
          />
        ) : null}
      </div>

      {/* AWAKENING SECTION */}
      <div className={styles.awakeningContainer}>
        <div className={styles.heroFrameContainer}>
          {hero?.awakeningLevel ? (
            <img
              className={styles.heroFrame}
              src={`/Images/AwakeningFrame/${awakeningLevelStage}.png`}
              alt={hero.awakeningLevel}
              width={120}
              height={120}
            />
          ) : null}
        </div>

        {/* STARS SECTION */}
        {starAmount.length >= 1 ? (
          <div className={styles.starsContainer}>{starAmount}</div>
        ) : null}
      </div>
    </div>
  );
};

export default HeroOrnaments;
