import { imageSelectionStore } from "@/stores/ImageSelectionStore";
import { heroGridStore } from "@/stores/heroGridStore";
import { motion } from "framer-motion";
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
      return removeHero(hero);
    }
    if (selectedSlot) {
      setHero(hero);
    }
  };

  return (
    <>
      <span className={styles.title}>Heroes ({filteredHeroes.length})</span>
      <div className={styles.container}>
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
                
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Hero
                  heroName={hero.name}
                  faction={hero.faction}
                  displayBadge
                  
                />
              </motion.div>
            );
          })}
      </div>
    </>
  );
};

export default HeroGrid;
