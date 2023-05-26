import React from "react";
import styles from "./HeroOrnaments.module.css";

const HeroOrnaments = ({
  awakeningLevel,
  signatureLevel,
  furnitureLevel,
  engravingLevel,
  starCount,
  faction,
}) => {
  const starAmount = [];

  for (let i = 0; i < starCount; i++) {
    starAmount.push(
      <img
        key={i}
        className={styles.star}
        src={`/Images/Stars/Stage2.png`}
        alt={`star${i}`}
      />
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.furnitureContainer}>
        {furnitureLevel ? (
          <img
            className={styles.furniture}
            src={`/Images/Furniture/${furnitureLevel}.png`}
            alt={furnitureLevel}
          />
        ) : null}
      </div>
      <div className={styles.signatureContainer}>
        {signatureLevel ? (
          <img
            className={styles.signature}
            src={`/Images/SignatureTag/${signatureLevel}.png`}
            alt={signatureLevel}
          />
        ) : null}
      </div>

      <div className={styles.factionContainer}>
        {faction ? (
          <img
            className={styles.factionBadge}
            src={`/Images/Faction/${faction}.png`}
            alt={faction}
          />
        ) : null}
      </div>
      <div className={styles.awakeningContainer}>
        <div className={styles.heroFrameContainer}>
          {awakeningLevel ? (
            <img
              className={styles.heroFrame}
              src={`/Images/AwakeningFrame/${awakeningLevel}.png`}
              alt={awakeningLevel}
              width={120}
              height={120}
            />
          ) : null}
        </div>
        <div className={styles.starsContainer}>
          {engravingLevel || starCount ? starAmount : null}
        </div>
      </div>
    </div>
  );
};

export default HeroOrnaments;
