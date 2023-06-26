import { heroGridStore } from "@/stores/heroGridStore";
import { motion, AnimatePresence } from "framer-motion";
import { globalStore } from "@/stores/globalStore";
import { useState, useEffect } from "react";
import Hero from "../shared/hero/hero";
import styles from "src/app/components/heroGrid/heroGrid.module.css";

const HeroGrid = ({ selectedFactions, selectedClasses }) => {
  const { selectedSlot, removeHero, slots, setHero, swapHero } = globalStore(
    (state) => state
  );

  const { setSearchQuery, filteredHeroes, selectedFaction } = heroGridStore(
    (state) => state
  );

  const [isHovered, setIsHovered] = useState(false);
  const [hoveredHeroName, setHoveredHeroName] = useState("");

  const factionFilteredHeroes = filteredHeroes.filter((hero) =>
    selectedFaction.includes(hero.faction)
  );

  const handleMouseEnter = (heroName) => {
    setIsHovered(true);
    setHoveredHeroName(heroName);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHoveredHeroName("");
  };

  const handleRemoveHero = (event, hero) => {
    event.stopPropagation(); // stop the event from bubbling up
    removeHero(hero);
  };

  const handleHeroClick = (hero) => {
    const existingSlot = Object.entries(slots).find(
      (slot) => slot[1] && slot[1].id === hero.id
    );
    if (existingSlot) {
      if (existingSlot[0] !== selectedSlot) {
        swapHero(hero, selectedSlot);
      } else {
        return removeHero(hero);
      }
    } else if (selectedSlot) {
      setHero(hero);
    }
  };

  return (
    <>
      <span className={styles.title}>
        Heroes<div className={styles.heroQuantity}>{factionFilteredHeroes.length}</div>
      </span>

      <div className={styles.gradientOverlay}></div>
      <div className={styles.heroGridWrapper}>
        <AnimatePresence>
          {factionFilteredHeroes.map((hero) => {
            const isSelected = Object.values(slots).find(
              (h) => h?.id === hero.id
            );
            return (
              <motion.div
                key={hero.id}
                onClick={() => handleHeroClick(hero)}
                onMouseEnter={() => handleMouseEnter(hero.name)}
                onMouseLeave={handleMouseLeave}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={styles.heroWrapper}
              >
                <AnimatePresence>
                  {isSelected && hoveredHeroName === hero.name ? (
                    <div className={styles.overlayWrapper}>
                      <motion.div
                        onClick={(event) => handleRemoveHero(event, hero)}
                        whileHover={{ scale: 1.1 }}
                        initial={{
                          opacity: 0,
                          scale: 0,
                          x: "-50%",
                          y: "-50%",
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          x: "-50%",
                          y: "-50%",
                        }}
                        exit={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
                        className={styles.deleteButtonWrapper}
                      >
                        <img
                          src={"/Images/Icons/Close.svg"}
                          width={16}
                          height={16}
                          className={styles.deleteIcon}
                        />
                      </motion.div>
                    </div>
                  ) : null}
                </AnimatePresence>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                  className={`${styles.heroWrapper} ${
                    isSelected ? styles.selected : ""
                  }`}
                >
                  <Hero
                    heroName={hero.name}
                    faction={hero.faction}
                    displayBadge
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </>
  );
};

export default HeroGrid;
