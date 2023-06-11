import styles from "./EditingPanel.module.css";
import { globalStore } from "@/stores/globalStore";
import { motion, AnimatePresence } from "framer-motion";

const EditingPanel = ({ handleClose }) => {
  const {
    slots,
    selectedSlot,
    setStars,
    setSignatureLevel,
    setAwakeningLevel,
    setFurnitureLevel,
  } = globalStore();



  const handleClick = (stars) => {
    setStars(stars, selectedSlot);
  };

  const handleSignatureLevel = (signatureLevel) => {
    setSignatureLevel(signatureLevel, selectedSlot);
  };

  const handleAwakeningLevel = (awakeningLevel) => {
    setAwakeningLevel(awakeningLevel, selectedSlot);
  };

  const handleFurnitureLevel = (furnitureLevel) => {
    setFurnitureLevel(furnitureLevel, selectedSlot);
  };

  const handleMaxOutHero = () => {
    setStars(5, selectedSlot);
    setSignatureLevel(35, selectedSlot);
    setAwakeningLevel("Ascended", selectedSlot);
    setFurnitureLevel(9, selectedSlot);
  };

  const handleMaxOutComposition = () => {
    Object.keys(slots).forEach((slot) => {
      setStars(5, slot);
      setSignatureLevel(35, slot);
      setAwakeningLevel("Ascended", slot);
      setFurnitureLevel(9, slot);
    });
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className={styles.container}
        >
          <div className={styles.Header}>
            Editing {slots[selectedSlot]?.name}
            <button onClick={handleClose}>Close</button>
          </div>

          <div className={styles.starsSection}>
            Stars
            <button onClick={() => handleClick(0)}>Star: 0</button>
            <button onClick={() => handleClick(1)}>Star: 1</button>
            <button onClick={() => handleClick(2)}>Star: 2</button>
            <button onClick={() => handleClick(3)}>Star: 3</button>
            <button onClick={() => handleClick(4)}>Star: 4</button>
            <button onClick={() => handleClick(5)}>Star: 5</button>
          </div>

          <div className={styles.furnitureSection}>
            Furniture Level
            <button onClick={() => handleFurnitureLevel(0)}>
              Furniture Level: 0/9
            </button>
            <button onClick={() => handleFurnitureLevel(3)}>
              Furniture Level: 3/9
            </button>
            <button onClick={() => handleFurnitureLevel(6)}>
              Furniture Level: 6/9
            </button>
            <button onClick={() => handleFurnitureLevel(9)}>
              Furniture Level: 9/9
            </button>
          </div>

          <div className={styles.signatureSection}>
            Signature Level
            <button onClick={() => handleSignatureLevel(0)}>0</button>
            <button onClick={() => handleSignatureLevel(10)}>10</button>
            <button onClick={() => handleSignatureLevel(20)}>20</button>
            <button onClick={() => handleSignatureLevel(30)}>30</button>
            <button onClick={() => handleSignatureLevel(35)}>35</button>
          </div>

          <div className={styles.awakeningSection}>
            Signature Level
            <button onClick={() => handleAwakeningLevel("Elite")}>Elite</button>
            <button onClick={() => handleAwakeningLevel("ElitePlus")}>
              Elite Plus
            </button>
            <button onClick={() => handleAwakeningLevel("Legendary")}>
              Legendary Plus
            </button>
            <button onClick={() => handleAwakeningLevel("LegendaryPlus")}>
              Legendary Plus
            </button>
            <button onClick={() => handleAwakeningLevel("Mythic")}>
              Mythic
            </button>
            <button onClick={() => handleAwakeningLevel("MythicPlus")}>
              MythicPlus
            </button>
            <button onClick={() => handleAwakeningLevel("Ascended")}>
              Ascended
            </button>
          </div>

          <div className={styles.maxOutSection}>
            <button onClick={handleMaxOutHero}>Max out hero</button>
            <button onClick={handleMaxOutComposition}>
              Max out composition
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default EditingPanel;
