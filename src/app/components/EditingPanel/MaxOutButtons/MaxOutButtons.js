import styles from "./MaxOutButtons.module.css";
import { globalStore } from "@/stores/globalStore";

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

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  const handleMaxOutHero = () => {
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
  return (
    <div className={styles.maxOutSection}>
      <button className={styles.maxOutButton} onClick={handleMaxOutHero}>
        Max out hero
      </button>
      <button className={styles.maxOutButton} onClick={handleMaxOutComposition}>
        Max out composition
      </button>
    </div>
  );
};

export default MaxOutButtons;
