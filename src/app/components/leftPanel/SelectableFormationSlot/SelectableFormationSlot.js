import { motion, AnimatePresence } from "framer-motion";
import { imageSelectionStore } from "@/stores/ImageSelectionStore";
import styles from "./SelectableFormationSlot.module.css";
import HeroOrnaments from "../../shared/HeroOrnaments/HeroOrnaments";
import { globalStore } from "@/stores/globalStore";

const SelectableFormationSlot = ({ slot }) => {
  const { selectedSlot, setSelectedSlot, removeHero, slots, hoveredHero } =
    globalStore((state) => state);

  const isSelected = selectedSlot === slot;
  const hero = slots[slot];
  console.log("hero name", hero);
  console.log("slots name", slots);

  const onClick = () => {
    if (hero) {
      removeHero(hero);
    } else {
      setSelectedSlot(slot);
    }
  };

  return (
    <div
      onClick={onClick}
      className={`${styles.container} ${isSelected ? styles.selected : ""}`} // adicionar um if aqui se o awakening level for maior q 0 entao tem que tirar o border
    >
      <img
        className={`${styles.addIcon}  ${hero ? styles.iconGone : ""}`}
        src="/Images/Icons/Add.svg"
        alt="close"
        width={16}
        height={16}
      />

      {isSelected && !hero && hoveredHero && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              ease: [0.17, 0.67, 0.83, 0.67],
            }}
          >
            <div className={styles.gradient}></div>
            <img
              className={styles.avatarPreview}
              src={`/Images/HeroAvatar/${hoveredHero}.png`}
              alt={hoveredHero}
              width={120}
              height={120}
            />
          </motion.div>
        </AnimatePresence>
      )}

      <AnimatePresence>
        {hero && (
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <div className={styles.Ornaments}>
              <HeroOrnaments hero={hero} />
            </div>
            {/* <img
              className={styles.faction_badge}
              src={`/Images/Faction/${hero.faction}.png`}
            /> */}

            <img
              className={styles.avatar}
              src={`/Images/HeroAvatar/${hero.name}.png`}
              alt={hero.name}
              width={120}
              height={120}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SelectableFormationSlot;
