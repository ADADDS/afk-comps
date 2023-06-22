import Tooltip from "../tooltip/Tooltip";
import styles from "./hero.module.css";
import { globalStore } from "@/stores/globalStore";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Hero = ({ heroName, faction, height, width, displayBadge }) => {
  const { setHoveredHero, clearHoveredHero } = globalStore((state) => state);

  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setHoveredHero(heroName);
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    clearHoveredHero();
    setShowTooltip(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${styles.container}`}
    >
      <div className={styles.heroContent}>
        {displayBadge && (
          <img
            className={styles.faction_badge}
            src={`/Images/Faction/${faction}.png`}
          />
        )}

        <motion.img
          className={styles.avatar}
          src={`/Images/HeroAvatar/${heroName}.png`}
          alt={heroName}
          width={width}
          height={height}
        />

        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ ease: "easeInOut", duration: 0.4 }}
              className={styles.tooltipContainer}
            >
              <Tooltip text={heroName} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Hero;
