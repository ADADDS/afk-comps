import { imageSelectionStore } from "@/stores/ImageSelectionStore";
import { heroGridStore } from "@/stores/heroGridStore";
import { motion, AnimatePresence } from "framer-motion";

import Hero from "../shared/hero/hero";
import styles from "src/app/components/heroGrid/heroGrid.module.css";

const HeroGrid = ({ selectedFactions, selectedClasses }) => {
  const { selectedSlot, removeHero, slots, setHero } = imageSelectionStore(
    (state) => state
  );

  const filteredHeroes = heroGridStore((state) => state.filteredHeroes);

  const handleHeroClick = (hero) => {
    const existingSlot = Object.entries(slots).find(
      (slot) => slot[1].id === hero.id
    );
    if (existingSlot) {
      return removeHero(hero); // aqui vai chamar a edição de hero
    }
    if (selectedSlot) {
      setHero(hero);
    }
  };

  return (
    <>
      <span className={styles.title}>Heroes<span>{filteredHeroes.length}</span></span>
      <div className={styles.container}>
        <AnimatePresence>
          {filteredHeroes
            .filter(
              (hero) =>
                selectedFactions.includes(hero.faction) &&
                selectedClasses.includes(hero.class)
            )
            .map((hero) => {
              const isSelected = Object.values(slots).find(
                (h) => h?.id === hero.id
              );
              return (
             
                <motion.div
                  className={`${styles.hero} ${
                    isSelected ? styles.selected : ""
                  }`}
                  key={hero.id}
                  onClick={() => handleHeroClick(hero)}
                  // layout 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1}}
                  transition={{
                    ease: [0.17, 0.67, 0.83, 0.67],
                    opacity: { ease: [0.17, 0.67, 0.83, 0.67] },
                    layout: { duration: 0.3 }}
                  }
                    exit={{ 
                      opacity:0}}      
                >
                    
                  <Hero
                    heroName={hero.name}
                    faction={hero.faction}
                    displayBadge
                  />
                </motion.div>
                
              );
            })}
        </AnimatePresence>
      </div>
    </>
  );
};

export default HeroGrid;
