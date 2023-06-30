import { motion, AnimatePresence } from "framer-motion";
import { editingPanelStore } from "@/stores/editingPanel";
import styles from "./SelectableFormationSlot.module.css";
import HeroOrnaments from "../../shared/HeroOrnaments/HeroOrnaments";
import { globalStore } from "@/stores/globalStore";
import { useEffect } from "react";

const SelectableFormationSlot = ({ slot }) => {
  const { selectedSlot, setSelectedSlot, removeHero, slots, hoveredHero } =
    globalStore((state) => state);

  const {
    modalIsOpen,
    setModalIsOpen,
    hoveredSelectableFormationSlot,
    setHoveredSelectableFormationSlot,
  } = editingPanelStore();

  const handleHover = (value) => setHoveredSelectableFormationSlot(value);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  const isSelected = selectedSlot === slot;
  const hero = slots[slot];

  const onClick = (event) => {
    if (event.detail == 2) {
      removeHero(hero);
    }
    setSelectedSlot(slot);
  };

  useEffect(() => {
    console.log("SelectableFormationSlot rendered with slot:", slot);
    console.log("selectedSlot is:", selectedSlot);
  }, [slot, selectedSlot]);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => handleHover(slot)}
      onMouseLeave={() => handleHover(null)}
      className={`${styles.container} ${isSelected ? styles.selected : ""}`}
    >
      <img
        className={`${styles.addIcon}  ${hero ? styles.iconGone : ""}`}
        src="/Images/Icons/Add.svg"
        alt="close"
        width={16}
        height={16}
      />

      {/* HANDLES HERO HOVER */}
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
        {hero && (isSelected || hoveredSelectableFormationSlot === slot) && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className={styles.editButton}
            onClick={toggleModal}
          >
            <img src={`/Images/Icons/Pencil.svg`} />
          </motion.button>
        )}
      </AnimatePresence>

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
